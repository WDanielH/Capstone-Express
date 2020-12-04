const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost/express-example', {logging: false});
module.exports = {sequelize};
