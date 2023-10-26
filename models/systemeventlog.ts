import { connectProductionMongo, connectLocationMongo } from "../middleware/db";

import mongoose, { Document } from "mongoose";

export interface ISystemEventLog extends Document {
  [key: string]: any;
}

const SystemEventLogSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "SystemEventLog",
    versionKey: false,
    strict: false,
  }
);

export const SystemEventLogsModel = connectProductionMongo.model("SystemEventLog", SystemEventLogSchema);
export const LocalSystemEventLogsModel = connectLocationMongo.model("SystemEventLog", SystemEventLogSchema);
