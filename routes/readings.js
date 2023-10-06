const express = require("express");
const router = express.Router();
const ControllerReadingsModel = require("../models/controller");
const ReadingsModel = require("../models/readings");
const { DatalogData30MinModel, LocalDataLogsModel } = require("../models/datalog30mins");
const { LocalSystemEventLogsModel } = require("../models/systemeventlog")

// http://localhost:3000/readings/getevents?id=660090
router.get("/getevents", async (req, res) => {
  const { id } = req.query;
  try {
    const events = await LocalSystemEventLogsModel.find({ UnitId: id }).select(["Msg","UnitId"]);
    res.status(200).json(events);
  } catch (error) {
    res.send({ message: error.message });
  }
});


module.exports = router;
