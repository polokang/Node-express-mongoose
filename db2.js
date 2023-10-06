const mongoose = require('mongoose');

const connectLocal = mongoose.createConnection("mongodb://127.0.0.1:27017/AquariusDB?retryWrites=false&connectTimeoutMS=10000");

module.exports = {
    connectLocal
};