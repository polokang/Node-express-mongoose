"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuditLogsModel = exports.AuditLogsModel = void 0;
const db_1 = require("../middleware/db");
const mongoose_1 = __importDefault(require("mongoose"));
const AuditLogsSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Types.ObjectId,
        default: null,
    },
    UserId: {
        type: Number,
    },
    EventDateUTC: {
        type: Date,
    },
    EventType: {
        type: String,
    },
    TypeFullName: {
        type: String,
    },
    RecordId: {
        type: String,
    },
    LogDetails: {},
}, {
    collection: "AuditLogs",
    versionKey: false,
    strict: false,
});
exports.AuditLogsModel = db_1.connectProductionMongo.model("AuditLogs", AuditLogsSchema);
exports.LocalAuditLogsModel = db_1.connectLocationMongo.model("AuditLogs", AuditLogsSchema);
