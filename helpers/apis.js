const axios = require("axios");

const searchEngineAPI = axios.create({
  baseURL: "http://api.serpstack.com/search",
});

module.exports = {
  searchEngineAPI,
};
