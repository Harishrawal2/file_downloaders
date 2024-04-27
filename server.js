import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";
import mongoDBConnection from "./src/config/database.js";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Mongodb connection
mongoDBConnection();

// environment configuration
dotenv.config();

// routes
app.use("/api", userRoutes);

// app configuration
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
