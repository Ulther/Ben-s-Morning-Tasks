const { modelName } = require("../models/model.js");

exports.controllerName = (req, res, next) => {
  console.log("controller here");
  modelName()
    .then(item => item)
    .catch(err => next(err));
};
