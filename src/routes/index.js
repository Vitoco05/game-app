const express = require('express');
const router = express.Router();
const gameRouter = require('./game.routes.js');
const carRouter = require('./car.routes.js');
 

// colocar las rutas aquí
router.use('/games', gameRouter);
router.use('/cars', carRouter);

module.exports = router;