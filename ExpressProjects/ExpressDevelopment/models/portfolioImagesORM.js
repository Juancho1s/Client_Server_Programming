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

const portfolioImagesORM = sequelize.define("project_images", {
  id: {
    type: DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  project_id: {
    type: DataTypes.INTEGER(),
  },
});

module.exports = portfolioImagesORM;
