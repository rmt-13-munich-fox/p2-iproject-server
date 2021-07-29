const router = require("express").Router();
const MainController = require("../controllers/mainController.js");
const { authentication } = require("../middlewares/auth.js");

router.get("/weather", MainController.getWeather);

router.post("/login", MainController.loginGoogle);
router.get("/calendar", authentication, MainController.getUpcomingEvents);

router.post("/pushNotification", MainController.fcmNotification);

module.exports = router;
