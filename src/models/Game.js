const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const Game = sequelize.define('game', {
  
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Game;