const db = require("../db");

const getProductos = async (req, res, next) => {
    try {
    const productos = await db.query("Select * from  productos", []);
      return res.json({ messange: 'Lista de Productos', productos: productos.rows });
    } catch (error) {
      return next(error);
    }
  };
module.exports = getProductos;
  