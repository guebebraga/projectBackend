const express = require("express");
const getProductos = require("../controllers/productos");

const router = express.Router();

router.get("/productos", getProductos);

module.exports = {
    router: router,
    getProductos: getProductos
};
