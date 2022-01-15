const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");
const db = require("../db");
 
const registro = async (req, res, next) => {
  try {
    if (req.body.mail && req.body.name && req.body.password) {
      // Formato del mail
      if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
        res
          .status(400)
          .json({ success: false, 
                  message: "Formato de mail incorrecto",
                  error: "Formato mail incorrecto" });
        return;
      }

      //Consulta a la base de datos 
      const usuarioBd = await db.query("Select * from usuarios where mail = $1", [ req.body.mail,]);

      // Fijarme que no exista
      const existeUser = usuarioBd.rowCount > 0;

      if (existeUser) {
        res.status(400).json({ success: false, 
                               message: "El mail ya existe",
                               error: "Mail ya existe" });
        return;
      }

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      console.log(salt);

      const newUser = {
        name: req.body.name,
        mail: req.body.mail,
        password: password,
      };

      const resBd = await db.query(
        "Insert into usuarios(nombre, mail, pass) values ($1, $2, $3)",
        [newUser.name, newUser.mail, newUser.password]
      );

      return res.status(200).json({ success: true, message:"Se creo el usuario correctamente", newUser });
    } else {
      return res.status(400).json({
        success: false,
        message: "Debe completar todos los campos",
        error: "Debe completar todos los campo"
      });
    }
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {

    const resBd = await db.query("Select * from usuarios where mail = $1", [req.body.mail,]);

    let user = null;
    if (resBd.rows.length === 1) {
      user = resBd.rows[0];
    }
    if (!user) {
      return res.status(400).json({  success: false,
                                     error: "Usuario no encontrado",});
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.pass//llego
    );
    if (!validPassword) {
      return res.status(400).json({ success: false,
                                    error: "Contraseña no válida" , 
                                    message: "Contraseña no valida"});
    }

    // Token
    const token = jwt.sign(
      {
        name: user.nombre,
        mail: user.mail,
      },
      TOKEN_SECRET
    );

    res.status(200).json({
      error: null,
      data: "Login exitoso",
      message:"Login exitoso",
      token
      
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registro,
  login
};


  