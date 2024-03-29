const router = require("express").Router();

const partyController = require("../controllers/partyController");

// END-POINT POST
router
    .route("/parties")
    .post((req, res) => partyController.create(req, res));

// END-POINT GET ALL
router
    .route("/parties")
    .get((req, res) => partyController.getAll(req, res));

// END-POINT GET BY ID
router
    .route("/parties/:id")
    .get((req, res) => partyController.get(req, res));

// END-POINT DELETE
router
    .route("/parties/:id")
    .delete((req, res) => partyController.delete(req, res));

// END-POINT PUT
router
    .route("/parties/:id")
    .put((req, res) => partyController.update(req, res));



module.exports = router;
