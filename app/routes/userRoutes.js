import express from "express";
import {
  GetAllUsers,
  Register,
  login,
  logout,
} from "../controllers/userController.js";
import { authToken } from "../middlewares/authentication.js";

const userRouter = express.Router();

// Get user profile
userRouter.get("/profile", authToken, GetAllUsers);

// create a new user
userRouter.post("/register", Register);

// Render the signup page
userRouter.get("/signup", (req, res) => {
  res.render("register");
});

// Login user
userRouter.post("/login", login);

userRouter.get("/login", (req, res) => {
  res.render("login");
});

// logout user
userRouter.post("/logout", logout);

export default userRouter;
