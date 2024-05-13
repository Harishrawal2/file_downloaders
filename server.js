import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./app/routes/userRoutes.js";
import fileRoutes from "./app/routes/fileRoutes.js";
import dotenv from "dotenv";
import mongoDBConnection from "./app/config/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { fileURLToPath } from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log(__dirname);
// console.log(__filename);
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Mongodb connection
mongoDBConnection();

// environment configuration
dotenv.config();

// View engine setup
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "app", "views"));
// app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api", userRoutes);
app.use("/api", fileRoutes);

// app configuration
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
