import express from "express";
import connectDB from "./config/DB.js";
import path from "path";
import { fileURLToPath } from "url";
import usersRoutes from "./routes/usersRoutes.js";
import tweetsRouter from "./routes/tweetRoutes.js";
import cors from 'cors';

const app = express();
app.use(express.json());
connectDB();

app.use(cors
  ({
    origin: 'http://localhost:5173', 
    credentials: true, methods: ['GET', 'POST', 'PUT', 'PATCH']
  })
);


// Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/client/dist")));


app.use("/users/user", usersRoutes);
app.use("/tweets", tweetsRouter);

 

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});


app.listen(5550, () => {
  console.log(`Server is running on port 5550`);
});
