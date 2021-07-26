const Sentiment = require('sentiment');
const getStopWords = require('./helpers/getStopWords');
const sentiment = new Sentiment();

const news = require('./data/dummy.json')
news.forEach(el =>{
  const result = sentiment.analyze(el.description);
  if(result.score>0) el.sentiment = "positive" 
  else if(result.score<0) el.sentiment = "negative"
  else el.sentiment = "neutral"
  el.score = result.score
  el.calculation = result.calculation
  el.comperative = result.comparative
  el.token = result.tokens
  el.stopwords = getStopWords(el.description)
  el.positive_words = result.positive
  el.negative_words = result.negative
  delete el.id
  delete el.published
  delete el.image_url
  delete el.createdAt
  delete el.updatedAt
  delete el.url
})


console.log(news)