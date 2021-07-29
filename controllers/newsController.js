const { News, db, Sentiment, User, Bookmark } = require("../models");
const { Op } = require("sequelize");
const getKeywordNews = require("../helpers/getKeywordNews");
const getSentiment = require("../helpers/getSentiment");
const getPagination = require("../helpers/getPagination");
const { getPagingData } = require("../helpers/getPagingData");


class Controller {
  static getLatestNews = (req, res, next) => {
    const { page, size, } = req.query;
    let sentiment = req.query.sentiment
    let querySentiment = {
      sentiment : {
        [Op.iLike] : `%${sentiment}%`
      }
    }
    if(!sentiment || sentiment == "all") delete querySentiment.sentiment
    const { limit, offset } = getPagination(page, size);
    News.findAndCountAll({
      order: [["createdAt", "desc"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Sentiment,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where : querySentiment
      },
      limit,
      offset,
    })
      .then((result) => {
        const response = getPagingData(result, page, limit);
        res.status(200).json(response);
      })
      .catch((err) => {
        next(err);
      });
  };

  static getAllLatestNews = (req,res,next)=>{
    News.findAll({ include : Sentiment })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      res.status(500).json({message : "Internal Server Error"})
    })
  }
  static searchKeywords = (req, res, next) => {
    const keywords = req.body.keywords;
    getKeywordNews(keywords)
      .then((result) => {
        result.forEach((el) => {
          el.Sentiment = getSentiment(el.description);
        });
        result = result.filter((el) => {
          if(el.image !== "None" && el.image !== ""){
            return el
          }
        })
        res.status(200).json(result);
      })
      .catch((err) => next(err));
  };
  static addBookmark = (req, res, next) => {
    const NewsId = req.params.id;
    const UserId = req.user.id;
    News.findOne({
      where: { id: NewsId },
    })
      .then((news) => {
        if(!news) res.status(404).json({message : `News with id ${NewsId} it not found`})
        else return Bookmark.create({ NewsId, UserId });
        
      })
      .then((result) => {
        const { createdAt, updatedAt, ...data } = result;
        res.status(200).json(data.dataValues);
      })
      .catch((err) => {
        next(err);
      });
  };
  static getBookmarks = (req, res, next) => {
    let sentiment = req.query.sentiment
    let querySentiment = {
      sentiment : {
        [Op.iLike] : `%${sentiment}%`
      }
    }
    if(!sentiment || sentiment == "all") delete querySentiment.sentiment
    const { page, size, } = req.query;
    const { limit, offset } = getPagination(page, size);
    Bookmark.findAndCountAll({
      where: { UserId: req.user.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
        include: ["id"],
      },
      include: {
        model: News,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Sentiment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          where : querySentiment
        },
      },
      limit,
      offset,
    })
      .then((result) => {
        let nullNews= 0
        result.rows.forEach((el) => {
          if(el.News === null){
            nullNews ++
          }
        })
        result.totalItems = result.totalItems - nullNews
        result.rows = result.rows.filter(el=> el.News !== null)
        const response = getPagingData(result, page, limit);
        res.status(200).json(response);
      })
      .catch((err) => {
        next(err);
      });
  };
  static deleteBookmark = (req, res, next) => {
    const id = req.params.id;
    Bookmark.destroy({
      where: { NewsId:id },
    })
      .then((result) => {
        if (result) res.status(200).json(`Bookmark with id ${id} has been deleted`);
        else res.status(404).json(`Bookmark with id ${id} is not found`);
      })
      .catch((err) => next(err));
  };
  static sentimentAnalyze = (req, res, next) => {
    let description = req.body.description;
    let result = getSentiment(description);
    res.status(200).json(result)
  }
}

module.exports = Controller;
