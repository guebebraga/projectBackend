const express = require("express");

const {registro , getUsers}= require("../controllers/miCuenta");

const router = express.Router();

router.post("/registro", registro);


module.exports = router;