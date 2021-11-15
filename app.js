const express = require("express");
const cors = require("cors");

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

app.listen(PORT,function(){
    console.log("Running in http//localhost:4000");
});

