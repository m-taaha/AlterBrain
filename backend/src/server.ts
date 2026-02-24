import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./config/db";


configDotenv();

const app = express();

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is runnig on http://localhost:${PORT}` );
})