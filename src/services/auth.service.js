const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
module.exports = {
  register: async ({ name, email, password }) => {
    const u = new User({ name, email, password });
    await u.save();
    return u;
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");
    const ok = await require("bcryptjs").compare(password, user.password);
    if (!ok) throw new Error("Invalid credentials");
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "7d" }
    );
    return { user, token };
  },
};
