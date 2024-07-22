import express from "express";
import connectDB from "./config/DB.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname,"/client/dist")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"/client/dist/index.html"));
});

connectDB();

