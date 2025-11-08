const authService = require("../services/auth.service");
const { ok, err } = require("../utils/response");
const admin = require("../config/firebase");

// exports.register = async (req, res) => {
//   try {
//     const u = await authService.register(req.body);
//     ok(res, u);
//   } catch (e) {
//     err(res, e.message);
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { user, token } = await authService.login(req.body);
//     ok(res, { user, token });
//   } catch (e) {
//     err(res, e.message, 401);
//   }
// };

exports.firebaseLogin = async (req, res) => {
  try {
    const { idToken } = req.body;
    const decoded = await admin.auth().verifyIdToken(idToken);
    const User = require("../models/user.model");
    let user = await User.findOne({ email: decoded.email });
    if (!user) {
      user = await User.create({
        name: decoded.name || decoded.email.split("@")[0],
        email: decoded.email,
        password: Math.random().toString(36),
      });
    }
    const jwt = require("jsonwebtoken").sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "7d" }
    );
    ok(res, { token: jwt });
  } catch (e) {
    console.error(e);
    err(res, "Firebase token invalid", 401);
  }
};
