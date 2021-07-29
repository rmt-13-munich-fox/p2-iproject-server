const axios = require('axios');
const BASE_URL =  process.env.BASE_URL

const getLatestNews = ()=>{
  return axios.get(`${BASE_URL}/latest-news`,{
    headers: {
      'Authorization' : process.env.CURRENTS_API_TOKEN
    }
  })
}

module.exports = getLatestNews

