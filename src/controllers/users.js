const db = require("../db");

const getUsers = async (req, res, next) => {
    try {
    const users = await db.query("Select * from  usuarios", []);
      return res.json({ messange: 'Users', users: users.rows });
    } catch (error) {
      return next(error);
    }
  };
module.exports = getUsers;
  