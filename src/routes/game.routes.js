const { getAll, create, getOne, remove, update } = require('../controllers/game.controller.js');
const express = require('express');

const gameRouter = express.Router();

gameRouter.route("/")
	.get(getAll)
	.post(create)

gameRouter.route("/:id")
  .get(getOne)
	.delete(remove)
	.patch(update)

module.exports = gameRouter;