const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name : {
        type : String,
        enum: ["resistance", "cardio"],
        required : "Submit Exercise Name"
      },
      type : {
        type: String,
        trim : true,
        required : "Submit Exercise Type"
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Submit Exercise Duration"
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;