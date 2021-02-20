const mongoose = require("mongoose");
const Schemea = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises:
    [{
        type: String,
        name: String,
        durations: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
});