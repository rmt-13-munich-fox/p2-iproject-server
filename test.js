const getStopWords = require('./helpers/getStopWords');
const Sentiment = require('sentiment');
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
})


console.log(news)