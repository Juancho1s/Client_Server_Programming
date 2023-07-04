const db = require("../config/db");
class UserModel {
  static async getUsers() {
    return new Promise((resolve) => {
      db.query("SELECT * FROM users", [], (error, result) => {
        if (!error) {
          resolve(result);
        }
      });
    });
  }

  static async getUser(id) {
    return new Promise((resolve) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (error, result) => {
        if (!error) {
          resolve(result);
        }
      });
    });
  }

  static async addUser(userName, password, avatar) {
    return new Promise((resolve) => {
      db.query(
        "INSERT INTO users (userNames, password, avatar) values (?, ?, ?)",
        [userName, password, avatar],
        (error, result) => {
          if (!error) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  }

  static async updateUser(id, userName, password, avatar) {
    return new Promise((resolve) => {
      db.query(
        "UPDATE users SET userNames = ?, password = ?, avatar = ? WHERE id = ?",
        [userName, password, avatar, id],
        (error, result) => {
          if (!error) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    });
  }

  static async deleteUser(id) {
    return new Promise((resolve) => {
      db.query("DELETE FROM users WHERE id = ?", [id], (error, result) => {
        if (!error) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}

module.exports = UserModel;
