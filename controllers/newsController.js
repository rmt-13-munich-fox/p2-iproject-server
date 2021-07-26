const {News,db} = require('../models')
const {Op} = require('sequelize')
const getLatestNews = require('../helpers/getLatestNews')
class Controller{
  static getLatestNews = (req,res,next) => {    
    News.findAll({
      order : [['published','desc']],
      attributes : {
        exclude : ["createdAt","updatedAt"]
      },
      limit : 10
    })
    .then((result) => {
      res.status(200).json({data : result})
    })
    .catch((err) => {
      next(err)
    })
  }
  static searchKeywords = (req,res,next) => {
    res.status(200).json({data : "okay"})
  }
}

module.exports = Controller