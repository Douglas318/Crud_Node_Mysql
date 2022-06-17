const sequelize = require('sequelize');
const seq = require('./db');

const database = require('./db');

const Produto = database.define('Produto',
    {
        Id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome : 
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false,
        }
        
    }
)

module.exports = Produto;