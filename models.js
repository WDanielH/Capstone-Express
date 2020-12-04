const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('./db');

class User extends Model {
}

User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    // email: {
    //     type: DataTypes.STRING
    //     // allowNull defaults to true
    // }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
});

class Dog extends Model {
}

Dog.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Dog', // We need to choose the model name
});


sequelize.sync({alter: true});

module.exports = {
    User, Dog
};
