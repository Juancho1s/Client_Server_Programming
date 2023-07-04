var express = require("express");
var router = express.Router();

const {
  UsersController,
  validationRules,
} = require("../controllers/UsersController");
const { PortfolioController } = require("../controllers/PortfolioController");
const portfolioORM = require("../models/portfolioORM");

/* get */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Porto" });
});
router.get("/addUser", (req, res) => {
  res.render("addUser");
});
router.get("/addProject/:user_id", function (req, res) {
  res.render("addProject", {
    user_id: req.params.user_id,
  });
});
router.get("/allUsers", UsersController.getAllUsers);
router.get("/addUser/:id", UsersController.getUser);
router.get("/portfolio2col/:id", PortfolioController.getAllPortfolios);
router.get(
  "/addProject/:user_id/:project_id",
  PortfolioController.getProjectUpdate
);
router.get(
  "/singleProject/:user_id/:project_id",
  PortfolioController.getProject
);

/* post */
router.post("/addUser", validationRules, UsersController.addUser);
router.post("/addUser/:id", validationRules, UsersController.updateUser);
router.post("/addProject/:user_id", PortfolioController.addProject);
router.post(
  "/addProject/:user_id/:project_id",
  PortfolioController.updateProject
);
router.post(
  "/deleteProject/:user_id/:project_id",
  PortfolioController.deleteProject
);

/* delete */
router.delete("/deleteUser/:id", UsersController.deleteUser);

module.exports = router;
