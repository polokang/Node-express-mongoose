// require("dotenv").config();

import express from "express";

import controllerRouter from "./routes/controllers";
//const readingsRouter = require("./routes/readings");

const app = express();

app.use("/", controllerRouter);
//app.use("/readings", readingsRouter);

app.listen(3000, () => console.log("Server Started...."));
