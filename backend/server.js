import express from "express";
import authRoutes from  './routes/auth.route.js';
import dotenv from 'dotenv';
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();

app.use('/api/auth' ,authRoutes);

console.log(process.env.MONGO_URL);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})