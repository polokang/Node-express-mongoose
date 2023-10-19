"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSystemEventLogsModel = exports.SystemEventLogsModel = void 0;
const db_1 = require("../middleware/db");
const mongoose_1 = __importDefault(require("mongoose"));
const SystemEventLogSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Types.ObjectId,
        default: null,
    },
    cmdStr: {
        type: String,
        default: null,
    },
    DateLoggedStr: {
        type: Date,
        default: null,
    },
    MsgRef: {
        type: Number,
        default: null,
    },
    UnitId: {
        type: Number,
        default: null,
    },
    DebugInfo: {
        type: String,
        default: null,
    },
    DateLogged: {
        type: Date,
        default: null,
    },
    SerialNo: {
        type: Number,
        default: null,
    },
    isAck: {
        type: Number,
        default: null,
    },
    unixTimeStamp: {
        type: Number,
        default: null,
    },
    DateLoggedServer: {
        type: Date,
        default: null,
    },
    DateLoggedString: {
        type: Date,
        default: null,
    },
    cmd: {
        type: Number,
        default: null,
    },
    EvtId: {
        type: Number,
        default: null,
    },
    Msg: {
        type: String,
        default: null,
    },
    DateLoggedUnix: {
        type: Number,
        default: null,
    },
}, {
    collection: "SystemEventLog",
});
exports.SystemEventLogsModel = db_1.connectProductionMongo.model("SystemEventLog", SystemEventLogSchema);
exports.LocalSystemEventLogsModel = db_1.connectLocationMongo.model("SystemEventLog", SystemEventLogSchema);
//module.exports = { SystemEventLogsModel, LocalSystemEventLogsModel };
