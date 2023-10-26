import { connectProductionMongo, connectLocationMongo } from "../middleware/db";
import mongoose, { Document } from "mongoose";

export interface IAuditLogsDoc extends Document {
  [key: string]: any;
}

const AuditLogsSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "AuditLogs",
    versionKey: false,
    strict: false,
  }
);

export const AuditLogs = connectProductionMongo.model<IAuditLogsDoc>("AuditLogs", AuditLogsSchema);
export const LocalAuditLogs = connectLocationMongo.model<IAuditLogsDoc>("AuditLogs", AuditLogsSchema);