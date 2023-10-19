"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalActUser = exports.ActUser = void 0;
const db_1 = require("../middleware/db");
const mongoose_1 = __importDefault(require("mongoose"));
const ActUserSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Types.ObjectId,
        default: null,
    },
}, {
    collection: "Act_User",
    versionKey: false,
    strict: false,
});
exports.ActUser = db_1.connectProductionMongo.model("Act_User", ActUserSchema);
exports.LocalActUser = db_1.connectLocationMongo.model("Act_User", ActUserSchema);
