const UserORM = require("../models/userORM");

var passport = require("passport");
var LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy(async function verify(userNames, password, cb) {
    let user = await UserORM.findOne({
      where: {
        userNames: userNames,
      }
    });

    if (!user) {
      return cb(null, false, { message: "incorrect user name or password." });
    } else if (user.password != password) {
      return cd(null, false, { message: "incorrect user password" });
    } else {
      return cb(null, user);
    }
  })
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

module.exports = passport;
