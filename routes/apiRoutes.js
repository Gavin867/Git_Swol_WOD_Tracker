const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
  Workout.find().then((workouts) => {
    res.json(workouts);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

router.post("api/workouts", (req, res) => {

  let newWorkout = {
    day: Date.now(),
    excercises: [req.body]
  };

  Workout.create(newWorkout).then((workout) => {

    res.json(workouts);

  }).catch((err) => {

    res.status(400).json(err);

  });
});

router.put("/api/workouts/:id", (req, res) => {

});


router.checkout("/api/workouts/range", (req, res) => {

});

module.exports = router;