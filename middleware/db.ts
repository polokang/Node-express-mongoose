import mongoose from "mongoose";

export const connectProductionMongo = mongoose.createConnection("mongodb+srv://AqRWUser:VMm5VmYA3HxtxtKp@cluster0.dyh9h.mongodb.net/AquariusTestDB");
export const connectLocationMongo = mongoose.createConnection("mongodb://127.0.0.1:27017/AquariusDB?retryWrites=false&connectTimeoutMS=10000");
