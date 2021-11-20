const express = require("express");

const {registro , login, getUsers}= require("../controllers/miCuenta");

const router = express.Router();

router.post("/registro", registro);
router.post("/login", login);

module.exports = router;