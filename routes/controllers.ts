import { Router } from "express";
// import { getOneMins, getUserLogs, getControllerEvents } from "../controllers/controllers";
import { insertEvents, insertReadings, getThirtyPoints, insertLogs, insertSettings, getoneMinsData } from "../controllers/controllers";
const collectionRouter = Router();

// collectionRouter.get("/:id/getOneMins", getOneMins);
// collectionRouter.get("/:userid/getUserLogs", getUserLogs);
// collectionRouter.get("/:unitid/getevents", getControllerEvents);
collectionRouter.get("/:unitid/insertevents", insertEvents);
collectionRouter.get("/:unitid/insertReadings", insertReadings);
collectionRouter.get("/:unitid/getthirtypoints", getThirtyPoints);
collectionRouter.get("/:unitid/insertLogs", insertLogs);
collectionRouter.get("/:unitid/insertSettings", insertSettings);
collectionRouter.get("/getoneMinsData", getoneMinsData)

export default collectionRouter;
