import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./config/db";
import userRouter from "./routes/userRoutes";


configDotenv();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/user", userRouter);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is runnig on http://localhost:${PORT}` );
})