const UserModel = require("../models/Users.js");

const control = (req, res) => {
    res.json("Success");
  };
  
const service = (req, res) => {
  res.json("Success");
};

  const client = (req, res) => {
    res.json("Success");
  };
  
  const detailsVisitor = (req, res) => {
    res.json("Success");
  };
  
  const homeVisitor = (req, res) => {
    res.json("Success");
  };
  
  const viewVisitor = (req, res) => {
    res.json("Success");
  };

  const logout = async (req, res) => {
    try {
        await new Promise((resolve, reject) => {
            res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'strict' }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error clearing cookie and logging out" });
    }
};

  module.exports = {
     
    control,
    client,
    service,
    detailsVisitor,
    homeVisitor,
    viewVisitor,
    logout,
};
