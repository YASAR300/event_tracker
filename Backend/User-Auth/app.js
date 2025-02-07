import express from "express";
import dotenv from "dotenv";
import userRouter from "./Routes/user.js";
import { connectDB } from "./data/database.js";
import cors from "cors"; // Corrected import
import path from 'path';
import cookieParser from "cookie-parser";

dotenv.config({ path: path.resolve('data', 'config.env') });
const app = express(); // Initialize Express

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend
  methods: ['GET', 'POST'],
  credentials: true,
}));
connectDB(); // Connect to the database

// Using Routes
app.use("/api/v1/users", userRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server is working on port 4000");
});
