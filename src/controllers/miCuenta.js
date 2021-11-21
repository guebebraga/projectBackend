const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jwt-validate");

const registro = async (req, res, next) => {
  try {
    if (req.body.mail && req.body.name && req.body.password) {
      // Formato del mail
      if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
        res
          .status(400)
          .json({ success: false, message: "Formato de mail incorrecto" });
        return;
      }

      const existeUser = usuarios.find((u) => {
        return u.mail === req.body.mail;
      });

      if (existeUser) {
        res.status(400).json({ success: false, message: "El usuario ya existe" });
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

      usuarios.push(newUser);

      return res.status(200).json({ success: true, message:"Se creo el usuario correctamente", newUser });
    } else {
      return res.status(400).json({
        success: false,
        message: "Debe completar todos los campos",
      });
    }
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = usuarios.find((u) => u.mail === req.body.mail);
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado", message:"No se encontro usuario"});
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña no válida" , message: "Contraseña no valida"});
    }

    // Token
    const token = jwt.sign(
      {
        name: user.name,
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

const usuarios = [
  {
    name: "gabriel",
    mail: "gabriel@gmail.com",
    password: "$2b$10$gFY68tNxQ01iUKwXVJkbe."

  },
];

  