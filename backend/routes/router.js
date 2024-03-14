const router = require("express").Router();

// Service router
const serviceRouter = require("./service");

router.use("/", serviceRouter);

module.exports = router;