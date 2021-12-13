const express = require("express");
const adsRouter = express.Router();
const arrayshuffle = require("array-shuffle");
const adsModel = require("../models/adsModel");
adsRouter.post("/", (req, res) => {
  adsModel.find({ appName: { $ne: req.body.appName } }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(arrayshuffle(data));
    }
  });
});
module.exports = adsRouter;
