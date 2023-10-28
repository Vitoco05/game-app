const catchError = require('../utils/catchError');
const Game = require('../models/Game');

const getAll = catchError(async(req, res) => {
    const games = await Game.findAll();
    return res.json(games)
});

const create = catchError(async(req, res) => {
    const { name, price } = req.body; 

    const game = await Game.create({
        name,
        price
    });
    res.status(201).json(game);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    return res.status(201).json(game)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const game = await Game.destroy({ where: {id}} )
    return res.status(201).json(game)
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const game = await Game.update(
        { name, price},
        { where : {id}, returning: true}
    );
    return res.status(201).json(game)
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}