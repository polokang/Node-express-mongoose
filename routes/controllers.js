const express = require("express");
const router = express.Router();
const ControllerReadingsModel = require("../models/controller");

router.get("/get", async (req, res) => {
  console.log("getall");

  try {
    //const controllers = await ControllerReadingsModel.findOne({ UnitId: 660090 });

    const controllers = await ControllerReadingsModel.find();
    res.status(200).json(controllers);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.send({ message: error.message });
  }

  //res.send("Hello World");
});

module.exports = router;
