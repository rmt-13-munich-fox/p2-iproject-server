// const { searchEngineAPI } = require("../../helpers/apis");
// const axios = require("axios");
const axios = require("../../helpers/apis");

class SearchEngineController {
  static async searchByQuery(req, res, next) {
    console.log(req.query.keyword);
    console.log(
      `?access_key=a87097c2d729d8f5a0dda985727cb734&query=${req.query.keyword}`
    );
    try {
      // const response = await axios.get(
      //   `http://api.serpstack.com/search?access_key=a87097c2d729d8f5a0dda985727cb734&query=${req.query.keyword}`
      // );
      const response = await axios({
        url: `query=${req.query.keyword}`,
        method: "GET",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SearchEngineController;
