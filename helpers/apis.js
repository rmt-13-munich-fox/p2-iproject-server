const axios = require("axios");

module.exports = axios.create({
  //   baseURL: "http://api.serpstack.com/search",
  baseURL:
    "http://api.serpstack.com/search?access_key=a87097c2d729d8f5a0dda985727cb734&",
});

// module.exports = {
//   searchEngineAPI,
// };
