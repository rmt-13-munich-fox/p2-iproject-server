const stopWordsList = require('../data/stopwords_en.json')

const getStopWords = (description) =>{
  return description.split(' ').filter(el =>{
    if(stopWordsList.includes(el)){
      return el
    }
  })
}


module.exports = getStopWords