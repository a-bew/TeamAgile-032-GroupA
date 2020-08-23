const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.verify = async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split("")[1];
  }

  if (token) {
    jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "failed to authorization" });
      } else {
        const user = await new User({ id: decoded.id }).fetch();
        if (!user) {
          res.status(401).json({ error: "No such user" });
        }
        req.currentUser = user;
        next();
      }
    });
  } else {
    res.status(403).json({
      error: "No token provided"
    });
  }
};

exports.signToken = data => {
  jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: "24h"
  });
};
