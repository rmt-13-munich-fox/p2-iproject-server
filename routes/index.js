const router = require("express").Router();
const userRouter = require("./userRoutes");
const appRouter = require("./appRoutes");

router.use(appRouter);

router.use(userRouter);

module.exports = router;
