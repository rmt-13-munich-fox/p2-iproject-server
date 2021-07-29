const router = require("express").Router();
const Controller = require("../controllers/userController");

router.post("/register", Controller.userRegister);

router.post("/login", Controller.userLogin);

router.post("/glogin", Controller.glogin);

module.exports = router;
