const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const swolSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            durations: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", swolSchema);

module.exports = Workout;