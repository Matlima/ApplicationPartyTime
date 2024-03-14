const router = require("express").Router();

const partyController = require("../controllers/partyController");

// END-POINT POST
router.route("/parties").post((req, res) => partyController.create(req, res));


module.exports = router;
