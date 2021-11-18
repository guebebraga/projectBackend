const bcrypt = require("bcrypt");

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
        res.status(400).json({ success: false, message: "Mail repetido" });
        return;
      }

      const salt = await bcrypt.genSalt(10);
      console.log("Salt", salt);
      const password = await bcrypt.hash(req.body.password, salt);

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
        message: "Faltan datos (requeridos: mail, name, password)",
      });
    }
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    return res.json({ error: null, usuarios });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registro,
  getUsers,
};

const usuarios = [
  {
    name: "Guebe",
    mail: "guebe@curso.com",
    password: "mipaz",
  },
];

  