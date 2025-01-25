const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.getHomePage);
router.get("/create-user", controller.getCreateUserPage);
router.post("/create-user", controller.createUser);

module.exports = router;
