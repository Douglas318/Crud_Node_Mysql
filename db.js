const sequelize = require('sequelize');

const seq = new sequelize('dbProduto', 'root', 'douglas123',
{
    dialect:'mysql', host:'localhost', 
});

module.exports = seq;
