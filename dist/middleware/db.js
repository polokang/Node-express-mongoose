"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectLocationMongo = exports.connectProductionMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.connectProductionMongo = mongoose_1.default.createConnection("mongodb+srv://AqRWUser:VMm5VmYA3HxtxtKp@cluster0.dyh9h.mongodb.net/AquariusTestDB");
exports.connectLocationMongo = mongoose_1.default.createConnection("mongodb://127.0.0.1:27017/AquariusDB?retryWrites=false&connectTimeoutMS=10000");
