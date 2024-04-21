import mongoose from "mongoose"
import express from "express"

import { DB_NAME } from "./constants.js";
import connect from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();
connect()
  .then(() => {
  app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Server Connected");
});
})
  .catch((err) => {
  console.log("DB connection failed!",err);
})



const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());


