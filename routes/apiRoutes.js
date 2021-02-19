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
  
// Get for workouts

// Get fpr 


  module.exports = router;