import { connectProductionMongo, connectLocationMongo } from "../middleware/db";
import mongoose, { Document } from "mongoose";

export interface IDatalogDataOneMin extends Document {
  [key: string]: any;
}

const DatalogDataOneMinModel = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "DatalogDataOneMin",
    versionKey: false,
    strict: false,
  }
);

export const DatalogDataOneMin = connectProductionMongo.model<IDatalogDataOneMin>("DatalogDataOneMin", DatalogDataOneMinModel);
export const LocalDatalogDataOneMin = connectLocationMongo.model<IDatalogDataOneMin>("DatalogDataOneMin", DatalogDataOneMinModel);
