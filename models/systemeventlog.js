const { connectProduct } = require("../db");
const { connectLocal } = require("../db2");

const mongoose = require("mongoose");

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
  },
  { versionKey: false }
);

const SystemEventLogsModel = connectProduct.model("SystemEventLog", SystemEventLogSchema);
const LocalSystemEventLogsModel = connectLocal.model("SystemEventLog", SystemEventLogSchema);

module.exports = { SystemEventLogsModel, LocalSystemEventLogsModel };
