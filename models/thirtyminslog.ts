import { connectProductionMongo, connectLocationMongo } from "../middleware/db";

import mongoose, { Document, model, Schema } from "mongoose";

export interface ThirtyMinsLog extends Document {
  id: string;
}

const ThirtyMinsLogSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    Flow: {
      comp_name: {
        type: String,
        default: null,
      },
      isOn: {
        type: Number,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    Generic4: {
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
    },
    ORPB: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
    },
    InlineDosing4: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput5: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    cmd: {
      type: Number,
      default: null,
    },
    BoardTemperature: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      output_current: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    Conductivity: {
      alarm: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      tdsValue: {
        type: Number,
        default: null,
      },
      cycleNumberValue: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
    },
    FacCtrl: {
      lockout: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput7: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    Outputs: {
      comp_name: {
        type: String,
        default: null,
      },
      outputPercBitMask: {
        type: Number,
        default: null,
      },
      outputControlBitMask: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput3: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput4: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput8: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    DateCreatedString: {
      type: Date,
      default: null,
    },
    DateLoggedString: {
      type: Date,
      default: null,
    },
    SerialNo: {
      type: Number,
      default: null,
    },
    DebugInfo: {
      type: String,
      default: null,
    },
    Generic1: {
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
    },
    Generic2: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput2: {
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
    },
    InlineDosing3: {
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
    },
    DateCreated: {
      type: Date,
      default: null,
    },
    MsgRef: {
      type: Number,
      default: null,
    },
    DateTime: {
      comp_name: {
        type: String,
        default: null,
      },
      seconds: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    pH: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
    },
    FacCtrlB: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
    },
    InlineDosing1: {
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
    },
    CurrentOutput6: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    DateCreatedServer: {
      type: Date,
      default: null,
    },
    DateLoggedUnix: {
      type: Number,
      default: null,
    },
    Generic3: {
      lockout: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    Generic5: {
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
    },
    Temperature: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    InlineDosing2: {
      alarm: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
    },
    CurrentOutput1: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    DateCreatedUnix: {
      type: Number,
      default: null,
    },
    DateLoggedServer: {
      type: Date,
      default: null,
    },
    UnitId: {
      type: Number,
      default: null,
    },
    Generic6: {
      voltage: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
    },
    Inhibitor: {
      comp_name: {
        type: String,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    Dispersant: {
      comp_name: {
        type: String,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    Alarm: {
      triggeredAlarmBitMask: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      activeAlarmBitMask: {
        type: Number,
        default: null,
      },
    },
    unixTimeStamp: {
      type: Number,
      default: null,
    },
    cmdStr: {
      type: String,
      default: null,
    },
    isAck: {
      type: Number,
      default: null,
    },
    pHB: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
    },
    ORP: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
      lockout: {
        type: Number,
        default: null,
      },
    },
    LSI: {
      comp_name: {
        type: String,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    WaterUsageMeter1: {
      pulse1Min: {
        type: Number,
        default: null,
      },
      pulse30Min: {
        type: Number,
        default: null,
      },
      volume30Minute: {
        type: Number,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      monthToDate: {
        type: Number,
        default: null,
      },
      yearToDate: {
        type: Number,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      volume1Minute: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    System: {
      v_modem: {
        type: String,
        default: null,
      },
      mb_modUsed: {
        type: String,
        default: null,
      },
      v_12v: {
        type: String,
        default: null,
      },
      v_C3v3: {
        type: String,
        default: null,
      },
      "M2-V3": {
        type: String,
        default: null,
      },
      "M2-raw4": {
        type: String,
        default: null,
      },
      "M2-V4": {
        type: String,
        default: null,
      },
      mb_status: {
        type: String,
        default: null,
      },
      "M1-raw4": {
        type: String,
        default: null,
      },
      "M1-V4": {
        type: String,
        default: null,
      },
      "M2-4-20mA": {
        type: String,
        default: null,
      },
      comp_name: {
        type: String,
        default: null,
      },
      v_usb: {
        type: String,
        default: null,
      },
      "M1-4-20mA": {
        type: String,
        default: null,
      },
      "M1-V3": {
        type: String,
        default: null,
      },
    },
    DateLogged: {
      type: Date,
      default: null,
    },
  },
  {
    collection: "DatalogData30Min",
  }
);

export const ThirtyMinsLogModel = connectProductionMongo.model("DatalogData30Min", ThirtyMinsLogSchema);
export const LocalThirtyMinsLogModel = connectLocationMongo.model("DatalogData30Min", ThirtyMinsLogSchema);

