const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:W@rbear1!@localhost/express-example', {logging: false});
module.exports = {sequelize};
