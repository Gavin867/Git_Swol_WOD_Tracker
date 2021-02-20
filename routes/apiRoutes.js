const router = require("express").Router();
const Transaction = require("../models");

router.get("/api/workouts", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {

});

router.post("api/workouts", (req, res) => {

});

router.checkout("/api/workouts/range", (req, res) => {

});

module.exports = router;