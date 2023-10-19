import { connectProductionMongo, connectLocationMongo } from "../middleware/db";

import mongoose, { Document, model, Schema } from "mongoose";

const SystemEventLogSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
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
  },
  {
    collection: "SystemEventLog",
  }
);

export const SystemEventLogsModel = connectProductionMongo.model("SystemEventLog", SystemEventLogSchema);
export const LocalSystemEventLogsModel = connectLocationMongo.model("SystemEventLog", SystemEventLogSchema);

//module.exports = { SystemEventLogsModel, LocalSystemEventLogsModel };
