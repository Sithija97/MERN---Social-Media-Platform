import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 6000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
