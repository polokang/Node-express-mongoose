import { connectProductionMongo, connectLocationMongo } from "../middleware/db";

import mongoose, { Document, model, Schema } from "mongoose";
// const mongoose = require("mongoose");

export interface UserLog extends Document {
  _id: mongoose.Types.ObjectId;
  userId: string;
  eventDateUTC: Date;
  eventType: string;
  typeFullName: string;
  recordId: string;
  LogDetails: string[];
}

const AuditLogsSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
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
  },
  {
    collection: "AuditLogs",
    versionKey: false,
    strict: false,
  }
);

export const AuditLogsModel = connectProductionMongo.model<UserLog>("AuditLogs", AuditLogsSchema);
export const LocalAuditLogsModel = connectLocationMongo.model<UserLog>("AuditLogs", AuditLogsSchema);
