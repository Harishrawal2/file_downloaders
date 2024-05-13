import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register a user
export const Register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Validate user input
    if (!name || !email || !password) {
      return res
        .status(401)
        .json({ message: "Name, email, and password are required" });
    }

    // Check if the user is already in the database
    const existingUser = await User.findOne({ email });
    // Check if the user is already in the database
    if (existingUser) {
      res.status(401).json({ message: "User already exists" });
    }

    // bcrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = await User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", error });
  }
};

// login the user
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find user by email
    const user = await User.findOne({ email });

    // check if user exists or not
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Compare password security
    const matchPassword = await bcrypt.compare(password, user.password);

    // if password don't match return authentication failed message
    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set the token as a cookie
    // Expires in 1 hour
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

    // return success response
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.log(`Error creating user: ${error}`);
    res.status(500).json({ message: "Error login failed", error });
  }
};

// logout user
export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Error logging out: ", error);
    res.status(500).json({ message: "Error logging out", error });
  }
};

// get profile
export const GetAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};
