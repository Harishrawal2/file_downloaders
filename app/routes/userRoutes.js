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

// Login user
userRouter.post("/login", login);

// logout user
userRouter.post("/logout", logout);

export default userRouter;
