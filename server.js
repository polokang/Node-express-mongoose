require("dotenv").config();

const express = require("express");
const app = express();
const controllerRouter = require("./routes/controllers");
const readingsRouter = require("./routes/readings");

app.use("/", controllerRouter);
app.use("/readings", readingsRouter);

app.listen(3000, () => console.log("Server Started...."));
