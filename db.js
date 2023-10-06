const mongoose = require("mongoose");
const connectProduct = mongoose.createConnection(process.env.DATABASE_URL);

module.exports = {
  connectProduct,
};
