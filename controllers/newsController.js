const { News, db, Sentiment, User, Bookmark } = require("../models");
const { Op } = require("sequelize");
const getKeywordNews = require("../helpers/getKeywordNews");
const getSentiment = require("../helpers/getSentiment");
class Controller {
  static getLatestNews = (req, res, next) => {
    News.findAll({
      order: [["published", "desc"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Sentiment,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      limit: 10,
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        next(err);
      });
  };
  static searchKeywords = (req, res, next) => {
    const keywords = req.params.keywords;
    getKeywordNews(keywords)
      .then((result) => {
        result.news.forEach((el) => {
          el.Sentiment = getSentiment(el.description);
        });
        res.status(200).json(result);
      })
      .catch((err) => next(err));
  };
  static addBookmark = (req, res, next) => {
    const NewsId = req.params.id;
    const UserId = req.user.id;
    Bookmark.create({ NewsId, UserId })
      .then((result) => {
        const { createdAt, updatedAt, ...data } = result;
        res.status(200).json(data.dataValues);
      })
      .catch((err) => {
        next(err);
      });
  };
  static getBookmarks = (req, res, next) => {
    Bookmark.findAll({
      where: { UserId : req.user.id},
      attributes: {
        exclude: ["createdAt", "updatedAt"],
        include : ["id"]
      },
      include: {
        model: News,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include : {
          model: Sentiment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        }
      },
    })
      .then((results) => {
        res.status(200).json(results);
      })
      .catch((err) => {
        next(err);
      });
  };
  static deleteBookmark = (req, res, next) => {
    const id = req.params.id;
    Bookmark.destroy({
      where: { id },
    })
      .then((result) => {
        if (result)
          res.status(200).json(`Bookmark with id ${id} has been deleted`);
        else res.status(404).json(`Bookmark with id ${id} is not found`);
      })
      .catch((err) => next(err));
  };
}

module.exports = Controller;
