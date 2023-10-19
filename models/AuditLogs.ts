import { connectProductionMongo, connectLocationMongo } from "../middleware/db";
import mongoose, { Document, Schema } from "mongoose";

export interface IActUserDoc extends Document {
  [key: string]: any;
}

const ActUserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "Act_User",
    versionKey: false,
    strict: false,
  }
);

export const ActUser = connectProductionMongo.model<IActUserDoc>("Act_User", ActUserSchema);
export const LocalActUser = connectLocationMongo.model<IActUserDoc>("Act_User", ActUserSchema);