const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {

    //need to do a bcrypt pw check here
    //see module for assistance
}

User.init(
    {
        //id
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        //username
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //password
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        // hook here need to use bcrypt as instructed in acceptance criteria
        //see module for assistance

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);



module.exports = User;