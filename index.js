import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import urlRouter from "./Routes/url.js";
import dbConnection from "./config/dbConnection.js";
dbConnection();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/url', urlRouter);


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});