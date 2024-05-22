import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';

import authRoutes from  './routes/auth.route.js';
import userRoutes from "./routes/user.route.js";

import connectMongoDB from "./db/connectMongoDB.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth' ,authRoutes);
app.use("/api/users", userRoutes);


console.log(process.env.MONGO_URL);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})