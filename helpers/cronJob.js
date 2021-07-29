const CronJob = require("cron").CronJob;
const getLatestNews = require("./getLatestNews");
const getSentiment = require("./getSentiment");
const { News, Sentiment } = require("../models");
// Seconds: 0-59
// Minutes: 0-59
// Hours: 0-23
// Day of Month: 1-31
// Months: 0-11 (Jan-Dec)
// Day of Week: 0-6 (Sun-Sat)
const job = new CronJob(
  "*/4 * * * *",
  function () {
    let news;
    getLatestNews()
      .then((res) => {
        news = res.data.news;
        news.forEach((el) => {
          el.image_url = el.image;
          el.category = el.category.join(",");
          el.published = new Date(el.published);
          el.news_id = el.id;
          // we use different column in database so id, image,and language is not needed
          delete el.id;
          delete el.image;
          delete el.language;
        });
        news = news.filter((el) => {
          // to get only news with image
          if (el.image_url !== "None") {
            return el;
          }
        });
        // id | title | author | description | url | image_url | category | published | createdAt | updatedAt
        return News.findAll();
      })
      .then((res) => {
        if (!res) {
          // if there is no news in the data base then insert all incoming request data to database
          return News.bulkCreate(news);
        } else {
          news = news.filter((current) => {
            if (!res.some((e) => e.news_id === current.news_id)) {
              // to get only unique incoming news then insert it into database
              return current;
            }
          });
          return News.bulkCreate(news); // optimize insert all news
        }
      })
      .then((news) => { // TODO FIX DUPLICATEEEEE
        const sentiments = [];
        // console.log(news) // ambil el.dataValues
        news.forEach((el)=>{
          sentiments.push(getSentiment(el.dataValues.description,el.dataValues.id));
        })
        return Sentiment.bulkCreate(sentiments);
      })
      .then((sentiment) => {
        console.log("headlines updated ...");
      })
      .catch((err) => {
        console.log(err)
      });
  },
  null,
  false,
  "America/Los_Angeles"
);

module.exports = job;
