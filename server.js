import express from "express";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { mongoDBConnection } from "./src/config/database.js";
import bodyParser from "body-parser";

// Resolve the directory of the current ES module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure dotenv to use .env file
config({ path: `${__dirname}/.env` });

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoDBConnection();

// app configuration
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
