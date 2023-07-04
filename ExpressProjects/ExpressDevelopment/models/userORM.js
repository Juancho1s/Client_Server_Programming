const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "123456789",
    database: "porto",
    dialect:'mysql',
    define:{
        timestamps: false
    }
});

const UserORM = sequelize.define("users",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userNames: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    }

});


module.exports = UserORM;

