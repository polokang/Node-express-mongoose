"use strict";
// require("dotenv").config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("./routes/controllers"));
//const readingsRouter = require("./routes/readings");
const app = (0, express_1.default)();
app.use("/", controllers_1.default);
//app.use("/readings", readingsRouter);
app.listen(3000, () => console.log("Server Started...."));
