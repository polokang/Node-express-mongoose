"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { getOneMins, getUserLogs, getControllerEvents } from "../controllers/controllers";
const controllers_1 = require("../controllers/controllers");
const collectionRouter = (0, express_1.Router)();
// collectionRouter.get("/:id/getOneMins", getOneMins);
// collectionRouter.get("/:userid/getUserLogs", getUserLogs);
// collectionRouter.get("/:unitid/getevents", getControllerEvents);
collectionRouter.get("/:unitid/insertevents", controllers_1.insertEvents);
collectionRouter.get("/:unitid/insertReadings", controllers_1.insertReadings);
collectionRouter.get("/:unitid/getthirtypoints", controllers_1.getThirtyPoints);
collectionRouter.get("/:unitid/getlogs", controllers_1.getlogs);
collectionRouter.get("/:unitid/insertLogs", controllers_1.insertLogs);
exports.default = collectionRouter;
