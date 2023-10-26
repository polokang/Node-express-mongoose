import { connectProductionMongo, connectLocationMongo } from "../middleware/db";
import mongoose, { Document } from "mongoose";

export interface IDatalogData30Min extends Document {
  [key: string]: any;
}

const DatalogData30MinModel = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "DatalogData30Min",
    versionKey: false,
    strict: false,
  }
);

export const DatalogData30Min = connectProductionMongo.model<IDatalogData30Min>("DatalogData30Min", DatalogData30MinModel);
export const LocalDatalogData30Min = connectLocationMongo.model<IDatalogData30Min>("DatalogData30Min", DatalogData30MinModel);
