const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

// Funções de end-point para API

router
    .route("/services")
    .post((req, res) => serviceController.create(req, res));

module.exports = router;
