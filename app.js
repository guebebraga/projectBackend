const express = require("express");
const cors = require("cors");

const registro = require("./src/routes/miCuenta");
const login = require("./src/routes/miCuenta");
const {getProductos }  = require("./src/routes/productos");
const {getUsers }  = require("./src/routes/users");
//
if (process.env.ENV !== "production") {
    require("dotenv").config();
  }
  const { resolve } = require("path");
  const { config } = require("dotenv");
  config({ path: resolve(__dirname, "./.env") });
  
//

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.get("/",(req,res)=>{
      res.send("ENDPOINT DE PRUEBA")
});

app.use("/productos", getProductos);
app.use("/miCuenta", registro);
app.use("/miCuenta", login);
app.use("/users", getUsers);

app.listen(PORT,function(){
    console.log("Running in http//localhost:4000");
});

