import express, { Request, Response } from "express";

// const ControllerReadingsModel = require("../models/controller");
// const ReadingsModel = require("../models/readings");
// const { DatalogData30MinModel, LocalDataLogsModel } = require("../models/datalog30mins");
import { SystemEventLogsModel, LocalSystemEventLogsModel } from "../models/SystemEventLog";
import { ControllerReadings, LocalControllerReadings } from "../models/ControllerReadings";
import { DatalogData30Min, LocalDatalogData30Min } from "../models/DatalogData30Min";
import { AuditLogs, LocalAuditLogs } from "../models/AuditLogs";
import { ControllerSettings, LocalControllerSettings } from "../models/ControllerSettings";
import { DatalogDataOneMin } from "../models/DatalogDataOneMin";

function getUnixTimeForDate(year: number, month: number, day: number): number {
  const specificDate = new Date(year, month - 1, day, 0, 0, 0, 0); // Month is 0-indexed
  return Math.floor(specificDate.getTime() / 1000); // Convert to Unix timestamp (seconds)
}

export const getoneMinsData = async (req: Request, res: Response) => {
  try {
    const oneMinsData = await DatalogDataOneMin.find({ UnitId: 660090, DateLogged: { $gte: new Date("2023-10-20 00:00:00"), $lt: new Date("2023-10-24 00:00:00") } }).select(
      "ORP pH"
    );

    res.status(200).json(oneMinsData);
  } catch (error) {
    res.status(403).json("System error");
  }
};

// http://localhost:3000/insertevents?id=660090
export const insertEvents = async (req: Request, res: Response) => {
  const { id } = req.query;
  let startOfToday = getUnixTimeForDate(2023, 1, 1);
  let endOfToday = getUnixTimeForDate(2023, 1, 31); // 今天结束的时间
  for (let i = 1; i < 30; i++) {
    try {
      startOfToday = getUnixTimeForDate(2023, 1, i);
      endOfToday = getUnixTimeForDate(2023, 1, i + 1);
      const datalogs = await SystemEventLogsModel.find({ DateLoggedUnix: { $gt: startOfToday, $lte: endOfToday } });
      let result = null;
      datalogs.forEach(async (item) => {
        let readings = new LocalSystemEventLogsModel(item.toObject());
        result = await readings.save();
      });
      console.log(i + ":" + datalogs.length + ":" + startOfToday + "-" + endOfToday);
    } catch (error) {
      res.status(403).json("System error");
    }
  }

  res.status(200).json("success");
};

// http://localhost:3000/660090/getthirtypoints?id=660090
export const getThirtyPoints = async (req: Request, res: Response) => {
  const { id } = req.query;
  if (
    typeof id === "string" &&
    /^(6|3|9)\d{5}$/.test(id) // 正则表达式匹配 6、3 或 9 开头的 6 位数字
  ) {
    const numericId = Number(id);
    try {
      const points = await DatalogData30Min.find({ UnitId: numericId, DateLogged: { $gte: new Date("2023-10-21 00:00:00"), $lt: new Date("2023-10-22 00:00:00") } }).select("ORP pH");
      res.status(200).json(points);
    } catch (error) {
      console.log(error);
      res.status(403).json("System error");
    }
  } else {
    res.status(400).send("Invalid ID format");
  }
};

// http://localhost:3000/660090/insertReadings?id=660090
export const insertReadings = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const readings = await ControllerReadings.find();
    readings.forEach(async (item) => {
      let read = new LocalControllerReadings(item.toObject());
      let result = await read.save();
    });

    res.status(200).json(readings.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};

export const insertLogs = async (req: Request, res: Response) => {
  const { id } = req.query;
  const startOfToday = getUnixTimeForDate(2023, 1, 16);
  const endOfToday = getUnixTimeForDate(2023, 10, 17); // 今天结束的时间
  try {
    const logs = await AuditLogs.find().sort({ EventDateUTC: -1 }).limit(10000);
    logs.forEach(async (item) => {
      let auditlog = new LocalAuditLogs(item.toObject());
      let result = await auditlog.save();
    });
    res.status(200).json(logs.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};

export const insertSettings = async (req: Request, res: Response) => {
  const { id } = req.query;
  try {
    const settings = await ControllerSettings.find().sort({ DateCreatedUnix: -1 }).limit(10000);
    settings.forEach(async (item) => {
      let setting = new LocalControllerSettings(item.toObject());
      let result = await setting.save();
    });
    res.status(200).json(settings.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};
