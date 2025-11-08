const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/auth.controller");
// router.post("/register", ctrl.register);
// router.post("/login", ctrl.login);
router.post("/firebase-login", ctrl.firebaseLogin);
module.exports = router;
