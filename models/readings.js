const { connectLocal } = require("../db2");

const mongoose = require("mongoose");

const readingsModel = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: null,
    },
    ORP: {
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
      pumpPercentage: {
        type: Number,
        default: null,
      },
      pumpStat: {
        type: String,
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
      outputControlBitMask: {
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
      outputPercBitMask: {
        type: Number,
        default: null,
      },
    },
    isAck: {
      type: Number,
      default: null,
    },
    DateCreatedUnix: {
      type: Number,
      default: null,
    },
    DateCreatedString: {
      type: Date,
      default: null,
    },
    DebugInfo: {
      type: String,
      default: null,
    },
    Generic4: {
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
    Temperature: {
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
    FacCtrlB: {
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
    WaterUsageMeter1: {
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
      volume30Minute: {
        type: Number,
        default: null,
      },
      value: {
        type: Number,
        default: null,
      },
      pulse1Min: {
        type: Number,
        default: null,
      },
      pulse30Min: {
        type: Number,
        default: null,
      },
      monthToDate: {
        type: Number,
        default: null,
      },
      alarm: {
        type: Number,
        default: null,
      },
    },
    cmdStr: {
      type: String,
      default: null,
    },
    SerialNo: {
      type: Number,
      default: null,
    },
    Generic2: {
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
      comp_name: {
        type: String,
        default: null,
      },
    },
    InlineDosing2: {
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
    CurrentOutput2: {
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
    CurrentOutput6: {
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
    DateLogged: {
      type: Date,
      default: null,
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
    InlineDosing3: {
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
    cmd: {
      type: Number,
      default: null,
    },
    DateLoggedString: {
      type: Date,
      default: null,
    },
    Generic1: {
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
      voltage: {
        type: Number,
        default: null,
      },
    },
    unixTimeStamp: {
      type: Number,
      default: null,
    },
    DateCreated: {
      type: Date,
      default: null,
    },
    Generic3: {
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
      comp_name: {
        type: String,
        default: null,
      },
    },
    pHB: {
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
    DateCreatedServer: {
      type: Date,
      default: null,
    },
    DateLoggedUnix: {
      type: Number,
      default: null,
    },
    Dispersant: {
      alarm: {
        type: Number,
        default: null,
      },
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
    },
    InlineDosing4: {
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
    Generic5: {
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
      comp_name: {
        type: String,
        default: null,
      },
    },
    Generic6: {
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
    FacCtrl: {
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
    CurrentOutput3: {
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
    System: {
      mb_status: {
        type: String,
        default: null,
      },
      "M1-V4": {
        type: String,
        default: null,
      },
      "M2-raw4": {
        type: String,
        default: null,
      },
      "M2-V3": {
        type: String,
        default: null,
      },
      "M2-V4": {
        type: String,
        default: null,
      },
      v_C3v3: {
        type: String,
        default: null,
      },
      v_modem: {
        type: String,
        default: null,
      },
      mb_modUsed: {
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
      "M1-4-20mA": {
        type: String,
        default: null,
      },
      "M1-raw4": {
        type: String,
        default: null,
      },
      v_12v: {
        type: String,
        default: null,
      },
      v_usb: {
        type: String,
        default: null,
      },
      "M1-V3": {
        type: String,
        default: null,
      },
    },
    DateLoggedServer: {
      type: Date,
      default: null,
    },
    InlineDosing1: {
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
    UnitId: {
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
    Conductivity: {
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
    CurrentOutput5: {
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
  },
  {
    collection: "ControllerReadings",
  },
  { versionKey: false },
  { skipVersioning: { dontVersionMe: true } }
);

const ReadingsModel = connectLocal.model("ControllerReadings", readingsModel);

module.exports = ReadingsModel;
