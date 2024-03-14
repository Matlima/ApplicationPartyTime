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

//END-POINT DELETE
router
    .route("/services/:id")
    .delete((req, res) => serviceController.delete(req, res));

//END-POINT PUT
router
.route("/services/:id")
.put((req, res) => serviceController.update(req, res));

module.exports = router;
