import { connectProductionMongo, connectLocationMongo } from "../middleware/db";
import mongoose, { Document } from "mongoose";

export interface IControllerSettings extends Document {
  [key: string]: any;
}

const ControllerSettingsModel = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
  },
  {
    collection: "ControllerSettings",
    versionKey: false,
    strict: false,
  }
);

export const ControllerSettings = connectProductionMongo.model<IControllerSettings>("ControllerSettings", ControllerSettingsModel);
export const LocalControllerSettings = connectLocationMongo.model<IControllerSettings>("ControllerSettings", ControllerSettingsModel);
