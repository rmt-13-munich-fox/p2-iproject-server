require('dotenv').config()
const axios = require('axios');
const BASE_URL = 'https://api.currentsapi.services/v1'

const getLatestNews = ()=>{
  return axios.get(`${BASE_URL}/latest-news`,{
    headers: {
      'Authorization' : process.env.CURRENTS_API_TOKEN
    }
  })
}

module.exports = getLatestNews

