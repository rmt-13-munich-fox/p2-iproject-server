const axios = require('axios');
const BASE_URL =  process.env.BASE_URL

const getKeywordNews = (keyword)=>{
  return axios.get(`${BASE_URL}/search?keywords=${keyword}`,{
    headers: {
      'Authorization' : process.env.CURRENTS_API_TOKEN
    }
  })
  .then(({data})=>{
    return data
  })
  .catch(err=>console.log(err))
}

module.exports = getKeywordNews
