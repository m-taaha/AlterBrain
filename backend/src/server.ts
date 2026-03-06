import { configDotenv } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import userRouter from "./routes/userRoutes";
import contentRouter from "./routes/contentRoutes";
import brainRouter from "./routes/brainRoutes";

configDotenv();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/brain", brainRouter)


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is runnig on http://localhost:${PORT}` );
})