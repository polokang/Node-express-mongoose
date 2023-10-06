const express = require("express");
const router = express.Router();
const ControllerReadingsModel = require("../models/controller");
const ReadingsModel = require("../models/readings");
const { DatalogData30MinModel, LocalDataLogsModel } = require("../models/datalog30mins");
const { SystemEventLogsModel, LocalSystemEventLogsModel } = require("../models/systemeventlog")

// http://localhost:3000/insertevents?id=660090
router.get("/insertevents", async (req, res) => {
  const { id } = req.query;
  try {
    const datalogs = await SystemEventLogsModel.find({ UnitId: id });
    datalogs.forEach(async (item) => {
      let readings = new LocalSystemEventLogsModel(item.toObject());
      let resutl = await readings.save();
    });
    res.status(200).json(datalogs.length);
  } catch (error) {
    res.send({ message: error.message });
  }
});

// http://localhost:3000/insert?id=660090
router.get("/insert", async (req, res) => {
  const { id } = req.query;
  try {
    const datalogs = await DatalogData30MinModel.find({ UnitId: id });
    datalogs.forEach(async (item) => {
      let readings = new LocalDataLogsModel(item.toObject());
      let resutl = await readings.save();
    });
    res.status(200).json(datalogs.length);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/get", async (req, res) => {
  const { id } = req.query;
  try {
    // const controller = await ControllerReadingsModel.find().where("UnitId").equals(id);
    const controller = await ControllerReadingsModel.find({ UnitId: { $gt: 660000 } }).select("UnitId");
    res.status(200).json(controller);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/add", async (req, res) => {
  console.log("getall");
  try {
    const controllers = await ControllerReadingsModel.find();
    controllers.forEach(async (item) => {
      let readings = new ReadingsModel(item.toObject());
      let resutl = await readings.save();
      console.log(resutl.UnitId);
    });
    res.status(200).json(controllers.length);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/del", async (req, res) => {
  const { id } = req.query;
  console.log("delete", id);
  try {
    const controllers = await ReadingsModel.deleteOne({ _id: id });
    res.status(200).json(controllers);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
