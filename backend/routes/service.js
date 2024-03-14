const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

//END-POINT POST
router
    .route("/services")
    .post((req, res) => serviceController.create(req, res));

//END-POINT GET ALL
router
    .route("/services")
    .get((req, res) => serviceController.getAll(req,res));

//END-POINT GET ID
router
    .route("/services/:id")
    .get((req, res) => serviceController.get(req, res));

module.exports = router;
