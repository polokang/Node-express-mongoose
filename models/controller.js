const { default: mongoose } = require("mongoose");

const controllerReadingsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  UnitId: {
    type: Number,
    require: true,
  },
  DateLogged: {
    type: Date,
    require: true,
    default: Date.now,
  },
  DateLoggedString: {
    type: String,
    require: true,
  },
},{
    collection: 'ControllerReadings'
});

module.exports = mongoose.model('ControllerReadingsModel', controllerReadingsSchema)