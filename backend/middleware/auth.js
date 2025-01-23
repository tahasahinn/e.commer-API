const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authenticationMid = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(500)
      .json({ message: "Erişim için lütfen login olunuz !!" });
  }

  const decodedData = jwt.verify(token, "SECRETTOKEN");

  if (!decodedData) {
    return res.status(500).json({ message: "Erişim tokeniniz geçersiz" });
  }

  req.user = await User.findById(decodedData.id);

  next();
};

const roleCehcked = (...roloes) => {
  return (req, res, next) => {
    if (!roloes.includes(req.user.role)) {
      return res.status(500).json({ message: "Grişi için izniniz yok !!" });
    }
    next();
  };
};

module.exports = { authenticationMid, roleCehcked };
