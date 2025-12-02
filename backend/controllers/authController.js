const User = require("../models/user");
const generateToken = require("../utils/generateToken");

// REGISTER USER
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  // Create user
  const user = await User.create({ name, email, password });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
};

// LOGIN USER
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate
  if (!email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await user.matchPassword(password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
};
