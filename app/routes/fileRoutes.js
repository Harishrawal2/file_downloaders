import express from "express";
import { authToken } from "../middlewares/authentication.js";
import { uploadeFile } from "../controllers/fileController.js";
import upload from "../middlewares/uploadMiddleware.js";

const fileRouter = express.Router();

fileRouter.post("/upload", upload.single("file"), uploadeFile);

export default fileRouter;
