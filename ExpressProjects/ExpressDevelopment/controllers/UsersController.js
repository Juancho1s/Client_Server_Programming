const { check, validationResult } = require("express-validator");
const UserORM = require("../models/userORM");

const validationRules = [
  check("userName")
    .notEmpty()
    .isEmail()
    .trim()
    .withMessage("user name is required"),
  check("password")
    .notEmpty()
    .isStrongPassword()
    .withMessage("Your password is required and must be strong!!"),
];

class UsersController {
  static async getAllUsers(req, res) {
    let results = await UserORM.findAll();

    if (results) {
      res.render("Users", { users: results });
    }
  }

  static async getUser(req, res) {
    let id = req.params.id;
    let results = await UserORM.findByPk(id);

    if (results) {
      res.render("addUser", { user: results });
    }
  }

  static async addUser(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.send(errors.errors[0].msg);
    } else {
      let result = await UserORM.create({
        userNames: req.body.userName,
        password: req.body.password,
        avatar: req.body.avatar,
      });

      if (result) {
        res.redirect("/allUsers");
      } else {
        res.send("Add user failed!!");
      }
    }
  }

  static async updateUser(req, res) {
    let id = req.params.id; //ROUTE/addUser/:id

    let result = await UserORM.update(
      {
        userNames: req.body.userName,
        password: req.body.password,
        avatar: req.body.avatar,
      },
      {
        where: { id: id },
      }
    );

    if (result) {
      res.redirect("/allUsers");
    } else {
      res.send("Add user failed!!");
    }
  }

  static async deleteUser(req, res) {
    let id = req.params.id;
    let result = false;

    if (id) {
      result = await UserORM.destroy({
        where: { id: id },
      });
    }
    
    res.status(200).send("ok");
  }
}

module.exports = {
  UsersController,
  validationRules,
};
