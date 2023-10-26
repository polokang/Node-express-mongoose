import { connectProductionMongo, connectLocationMongo } from "../middleware/db";
import mongoose, { Document } from "mongoose";

// export interface IControllerReadings extends IPh,IWaterUsageMeter  {
//   id: string;
//   ORP: Document;
//   pH: IPh;
//   pHB: IPh;
//   WaterUsageMeter:IWaterUsageMeter
// }

export interface IControllerReadings extends Document {
  [key: string]: any;
}

const ControllerReadingsModel = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "ControllerReadings",
    versionKey: false,
    strict: false,
  }
);

export const ControllerReadings = connectProductionMongo.model<IControllerReadings>("ControllerReadings", ControllerReadingsModel);
export const LocalControllerReadings = connectLocationMongo.model<IControllerReadings>("ControllerReadings", ControllerReadingsModel);
