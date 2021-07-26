const {News,db,Sentiment} = require('../models')
const {Op} = require('sequelize')
const getLatestNews = require('../helpers/getLatestNews')
const getKeywordNews = require('../helpers/getKeywordNews')
const getSentiment = require('../helpers/getSentiment')
class Controller{
  static getLatestNews = (req,res,next) => {    
    News.findAll({
      order : [['published','desc']],
      attributes : {
        exclude : ["createdAt","updatedAt"]
      },
      include : {
        model : Sentiment,
        attributes : {
          exclude : ["createdAt","updatedAt"]
        }
      },
      limit : 10
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      next(err)
    })
  }
  static searchKeywords = (req,res,next) => {
    const keywords = req.params.keywords
    getKeywordNews(keywords)
    .then((result) => {
      result.news.forEach((el)=>{
        el.Sentiment = getSentiment(el.description)
      })
      res.status(200).json(result)
    })
    .catch(err=>console.log(err))
  }
}

module.exports = Controller