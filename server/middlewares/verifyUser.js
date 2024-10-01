const jwt = require("jsonwebtoken");

// Verify User
const verifyUser = (roles) => (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    } else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "Error with token" });
        } else {
          if (roles.includes(decoded.role)) {
            next();
          } else {
            return res.status(403).json({ message: "Unauthorized" });
          }
        }
      });
    }
  };

  module.exports = verifyUser;