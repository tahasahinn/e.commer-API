const express = require("express");
const {
  register,
  login,
  logout,
  forgetPassword,
  resetPassword,
  userDetail,
} = require("../controllers/user.js");
const { authenticationMid } = require("../middleware/auth.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgotPassword", forgetPassword);
router.post("/reset/:token", resetPassword);
router.post("/me", authenticationMid, userDetail);

module.exports = router;
