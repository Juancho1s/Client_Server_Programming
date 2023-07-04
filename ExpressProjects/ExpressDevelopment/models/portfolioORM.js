const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "123456789",
  database: "porto",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const portfolioORM = sequelize.define("portfolios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  cover: {
    type: DataTypes.STRING,
  },
  technologies: {
    type: DataTypes.JSON,
  },
  client: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = portfolioORM;
