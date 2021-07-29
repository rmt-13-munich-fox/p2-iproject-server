const router = require("express").Router();
const Controller = require("../controllers/appController");

router.get("/", Controller.dashboard);

module.exports = router;
