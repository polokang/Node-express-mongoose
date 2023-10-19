import { Router } from "express";

import { insertEvents } from "../controllers/controllers";
const readingsRouter = Router();

// http://localhost:3000/readings/getevents?id=660090
readingsRouter.get("/:unitid/insertevents", insertEvents);
// readingsRouter.get("/:unitid/insertReadings", insertReadings);
export default readingsRouter;

// router.get("/getevents", async (req, res) => {
//   const { id } = req.query;
//   try {
//     const events = await LocalSystemEventLogsModel.find({ UnitId: id }).select(["Msg","UnitId"]);
//     res.status(200).json(events);
//   } catch (error) {
//     res.send({ message: error.message });
//   }
// });
