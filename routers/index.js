const express = require("express");
const SearchController = require("../controllers/searchEngine/searchController");
const routers = express.Router();

routers.get("/connect", function (req, res) {
  res.send("Hello World!");
});

routers.post("/search", SearchController.searchByQuery);

module.exports = routers;
