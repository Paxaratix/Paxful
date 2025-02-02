const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.getHomePage);
router.get("/error", controller.getErrorPage);
router.post("/create-user", controller.createUser);

module.exports = router;
