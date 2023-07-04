const { check, validationResult } = require("express-validator");
const portfolioORM = require("../models/portfolioORM");
const portfolioImagesORM = require("../models/portfolioImagesORM");
const { Op } = require("sequelize");

class PortfolioController {
  static async getAllPortfolios(req, res) {
    let user_id = req.params.id;
    let results = await portfolioORM.findAll({
      where: {
        user_id: user_id,
      },
    });

    res.render("portfolio2col", {
      project: results,
      user_id: user_id,
    });
  }

  static async getProject(req, res) {
    let id = req.params.project_id;

    let results = await portfolioORM.findByPk(id);

    let similar = await portfolioORM.findAll({
      where: {
        type: results.type,
        id: {
          [Op.not]: id,
        },
      },
    });

    let images = await portfolioImagesORM.findAll({
      where: {
        project_id: id,
      },
    });

    res.render("singleProject", {
      project: results,
      similar: similar,
      images: images,
      user_id: req.params.user_id,
    });
  }

  static async getProjectUpdate(req, res) {
    let project_id = req.params.project_id;
    let user_id = req.params.user_id;

    let results = await portfolioORM.findByPk(project_id);

    res.render("addProject", {
      project: results,
      project_id: project_id,
      user_id: user_id,
    });
  }

  static async addProject(req, res) {
    let create = await portfolioORM.create({
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
      cover: req.body.cover,
      technologies: req.body.technologies.split(","),
      client: req.body.client,
      date: req.body.date,
      user_id: req.params.user_id,
    });

    res.redirect(`/singleProject/${req.params.user_id}/${create.id}`);
  }

  static async updateProject(req, res) {
    let project_id = req.params.project_id;
    let user_id = req.params.user_id;

    let update = await portfolioORM.update(
      {
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        cover: req.body.cover,
        technologies: req.body.technologies.split(","),
        client: req.body.client,
        date: req.body.date,
        user_id: user_id,
      },
      {
        where: {
          id: project_id,
        },
      }
    );

    res.redirect(`/singleProject/${user_id}/${project_id}`);
  }

  static async deleteProject(req, res) {
    let project_id = req.params.project_id;
    let user_id = req.params.user_id;
    let results = false;

    if (project_id) {
      results = portfolioORM.destroy({
        where: {
          id: project_id,
        },
      });
    }
    res.redirect(`/portfolio2col/${user_id}`);
  }
}

module.exports = { PortfolioController };
