const UserModel = require("../models/Users.js");

const logout = (req, res) => {
    res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'strict' })
      .status(200).json({ message: "Logout successful" });
};

module.exports = { logout };