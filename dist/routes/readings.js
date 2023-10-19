"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
const readingsRouter = (0, express_1.Router)();
// http://localhost:3000/readings/getevents?id=660090
readingsRouter.get("/:unitid/insertevents", controllers_1.insertEvents);
// readingsRouter.get("/:unitid/insertReadings", insertReadings);
exports.default = readingsRouter;
// router.get("/getevents", async (req, res) => {
//   const { id } = req.query;
//   try {
//     const events = await LocalSystemEventLogsModel.find({ UnitId: id }).select(["Msg","UnitId"]);
//     res.status(200).json(events);
//   } catch (error) {
//     res.send({ message: error.message });
//   }
// });
