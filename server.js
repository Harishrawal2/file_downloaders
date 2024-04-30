import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";
import mongoDBConnection from "./src/config/database.js";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
console.log(__filename);
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Mongodb connection
mongoDBConnection();

// environment configuration
dotenv.config();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api", userRoutes);

// app configuration
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
