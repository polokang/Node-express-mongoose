"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertLogs = exports.getlogs = exports.insertReadings = exports.getThirtyPoints = exports.insertEvents = void 0;
// const ControllerReadingsModel = require("../models/controller");
// const ReadingsModel = require("../models/readings");
// const { DatalogData30MinModel, LocalDataLogsModel } = require("../models/datalog30mins");
const systemeventlog_1 = require("../models/systemeventlog");
const controllerreadings_1 = require("../models/controllerreadings");
const thirtyminslog_1 = require("../models/thirtyminslog");
const userlog_1 = require("../models/userlog");
const AuditLogs_1 = require("../models/AuditLogs");
// http://localhost:3000/insertevents?id=660090
const insertEvents = async (req, res) => {
    const { id } = req.query;
    console.log("==>", id);
    try {
        const datalogs = await systemeventlog_1.SystemEventLogsModel.find({ UnitId: id });
        let result = null;
        datalogs.forEach(async (item) => {
            let readings = new systemeventlog_1.LocalSystemEventLogsModel(item);
            console.log(item);
            //result = await readings.save();
        });
        res.status(200).json(datalogs.length);
    }
    catch (error) {
        res.status(403).json("System error");
    }
};
exports.insertEvents = insertEvents;
function getUnixTimeForDate(year, month, day) {
    const specificDate = new Date(year, month - 1, day, 0, 0, 0, 0); // Month is 0-indexed
    return Math.floor(specificDate.getTime() / 1000); // Convert to Unix timestamp (seconds)
}
// http://localhost:3000/getthirtypoints?id=660090
const getThirtyPoints = async (req, res) => {
    const { id } = req.query;
    const today = new Date().getTime();
    const startOfToday = getUnixTimeForDate(2023, 1, 16);
    const endOfToday = getUnixTimeForDate(2023, 10, 17); // 今天结束的时间
    try {
        const points = await thirtyminslog_1.ThirtyMinsLogModel.find({ UnitId: id, DateLoggedUnix: { $gte: startOfToday, $lte: endOfToday } }).select("ORP pH");
        res.status(200).json(points);
    }
    catch (error) {
        console.log(error);
        res.status(403).json("System error");
    }
};
exports.getThirtyPoints = getThirtyPoints;
// http://localhost:3000/660090/insertReadings?id=660090
const insertReadings = async (req, res) => {
    const { id } = req.query;
    console.log("===id==", id);
    try {
        const readings = await controllerreadings_1.ReadingsModel.find({ UnitId: id });
        readings.forEach(async (item) => {
            let obj = item.toObject();
            console.log(obj.pH);
            const { pH, _id, ORP, pHB, WaterUsageMeter } = obj;
            const readItem = {
                id: _id.toString(),
                ORP,
                pH,
                pHB,
                WaterUsageMeter,
            };
            console.log(readItem);
        });
        res.status(200).json(readings.length);
    }
    catch (error) {
        res.status(403).json("System error");
    }
};
exports.insertReadings = insertReadings;
const getlogs = async (req, res) => {
    const { id } = req.query;
    console.log(id);
    try {
        const logs = await userlog_1.AuditLogsModel.find().limit(10000);
        logs.forEach(async (item) => {
            let audilog = new userlog_1.LocalAuditLogsModel(item.toObject());
            let result = await audilog.save();
        });
        res.status(200).json(logs.length);
    }
    catch (error) {
        res.status(403).json("System error");
    }
};
exports.getlogs = getlogs;
const insertLogs = async (req, res) => {
    const { id } = req.query;
    console.log(id);
    try {
        const logs = await AuditLogs_1.ActUser.find().limit(10000);
        logs.forEach(async (item) => {
            let audilog = new AuditLogs_1.LocalActUser(item.toObject());
            let result = await audilog.save();
        });
        res.status(200).json(logs.length);
    }
    catch (error) {
        res.status(403).json("System error");
    }
};
exports.insertLogs = insertLogs;
