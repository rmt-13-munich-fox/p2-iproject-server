const SearchEngineController = require("../controllers/searchEngine/searchEngineController");
const express = require("express");
const routers = express.Router();

routers.get("/search", SearchEngineController.searchByQuery);

module.exports = routers;
