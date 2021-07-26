const CronJob = require('cron').CronJob;
const getLatestNews = require('./getLatestNews')
const {News} = require('../models')
// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11 (Jan-Dec)
// Day of Week: 0-6 (Sun-Sat)
const job = new CronJob('*/5 * * * *', function() {
  let news
  getLatestNews().then((res) =>{
    news = res.data.news
    news.forEach((el)=>{
      el.image_url = el.image
      el.category = el.category.join(',')
      el.published = new Date(el.published)
      el.news_id = el.id
      delete el.id 
      delete el.image
      delete el.language
    })
    news = news.filter((el)=>{
      if(el.image_url !== 'None'){
        return el
      }
    })
    // id | title | author | description | url | image_url | category | published | createdAt | updatedAt
    return News.findAll()
  }).then((res)=>{
    if(!res){
      return News.bulkCreate(news)
    }else{
      news = news.filter((current)=> {
        if(!res.some(e => e.news_id === current.news_id)){
          return current
        }
      })
      console.log(news.length, 'has been inserted')
      return News.bulkCreate(news)
    }
  }).then((news)=>{
    console.log('headlines updated ...')
  })
  .catch((err)=>{
    throw new Error(err)
  })
}, null, false, 'America/Los_Angeles');

module.exports = job