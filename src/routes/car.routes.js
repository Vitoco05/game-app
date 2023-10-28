const { getAll, create, getOne, remove, update } = require('../controllers/car.controller.js');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/")
	.get(getAll)
	.post(create)

carRouter.route("/:id")
  .get(getOne)
	.delete(remove)
	.patch(update)

module.exports = carRouter;