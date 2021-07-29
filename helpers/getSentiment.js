const getStopWords = require('../helpers/getStopWords');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();


const getSentiment = (description,newsId) =>{
  const result = sentiment.analyze(description);
  const sentimentObj = {}
  if(result.score>0) sentimentObj.sentiment = "positive" 
  else if(result.score<0) sentimentObj.sentiment = "negative"
  else sentimentObj.sentiment = "neutral"
  sentimentObj.NewsId = newsId
  sentimentObj.score = result.score
  sentimentObj.comperative = result.comparative
  // need to be joined as string
  sentimentObj.calculation = JSON.stringify(result.calculation)
  sentimentObj.stop_words = getStopWords(description).join(',')
  sentimentObj.tokens = result.tokens.join(',')
  sentimentObj.positive_words = result.positive.join(',')
  sentimentObj.negative_words = result.negative.join(',')
  return sentimentObj
}


module.exports = getSentiment