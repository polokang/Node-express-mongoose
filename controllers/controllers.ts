import express, { Request, Response } from "express";

// const ControllerReadingsModel = require("../models/controller");
// const ReadingsModel = require("../models/readings");
// const { DatalogData30MinModel, LocalDataLogsModel } = require("../models/datalog30mins");
import { SystemEventLogsModel, LocalSystemEventLogsModel } from "../models/systemeventlog";
import { ReadingsModel, LocalReadingsModel, IControllerReadings } from "../models/controllerreadings";
import { ThirtyMinsLogModel, LocalThirtyMinsLogModel } from "../models/thirtyminslog";
import { AuditLogsModel, LocalAuditLogsModel } from "../models/userlog";
import { ActUser, LocalActUser } from "../models/AuditLogs";

// http://localhost:3000/insertevents?id=660090
export const insertEvents = async (req: Request, res: Response) => {
  const { id } = req.query;
  console.log("==>", id);
  try {
    const datalogs = await SystemEventLogsModel.find({ UnitId: id });
    let result = null;
    datalogs.forEach(async (item) => {
      let readings = new LocalSystemEventLogsModel(item);
      console.log(item);
      //result = await readings.save();
    });

    res.status(200).json(datalogs.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};

function getUnixTimeForDate(year: number, month: number, day: number): number {
  const specificDate = new Date(year, month - 1, day, 0, 0, 0, 0); // Month is 0-indexed
  return Math.floor(specificDate.getTime() / 1000); // Convert to Unix timestamp (seconds)
}

// http://localhost:3000/getthirtypoints?id=660090
export const getThirtyPoints = async (req: Request, res: Response) => {
  const { id } = req.query;
  const today = new Date().getTime();
  const startOfToday = getUnixTimeForDate(2023, 1, 16);
  const endOfToday = getUnixTimeForDate(2023, 10, 17); // 今天结束的时间
  try {
    const points = await ThirtyMinsLogModel.find({ UnitId: id, DateLoggedUnix: { $gte: startOfToday, $lte: endOfToday } }).select("ORP pH");
    res.status(200).json(points);
  } catch (error) {
    console.log(error);
    res.status(403).json("System error");
  }
};

// http://localhost:3000/660090/insertReadings?id=660090
export const insertReadings = async (req: Request, res: Response) => {
  const { id } = req.query;
  console.log("===id==", id);

  try {
    const readings = await ReadingsModel.find({ UnitId: id });
    readings.forEach(async (item) => {
      let obj = item.toObject();
      console.log(obj.pH);
      const { pH, _id, ORP, pHB, WaterUsageMeter } = obj;
      const readItem: IControllerReadings = {
        id: _id.toString(),
        ORP,
        pH,
        pHB,
        WaterUsageMeter,
      };
      console.log(readItem);
    });

    res.status(200).json(readings.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};

export const getlogs = async (req: Request, res: Response) => {
  const { id } = req.query;
  console.log(id);
  try {
    const logs = await AuditLogsModel.find().limit(10000);
    logs.forEach(async (item) => {
      let audilog = new LocalAuditLogsModel(item.toObject());
      let result = await audilog.save();
    });
    res.status(200).json(logs.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};

export const insertLogs = async (req: Request, res: Response) => {
  const { id } = req.query;
  console.log(id);
  try {
    const logs = await ActUser.find().limit(10000);
    logs.forEach(async (item) => {
      let audilog = new LocalActUser(item.toObject());
      let result = await audilog.save();
    });
    res.status(200).json(logs.length);
  } catch (error) {
    res.status(403).json("System error");
  }
};
