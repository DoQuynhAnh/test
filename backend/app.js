import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import expressValidator from 'express-validator';
import cookieParser from "cookie-parser"


const app = express();
dotenv.config();

import newRouter from "./routers/product.router";
import categoryRouter from "./routers/category.router";
import authRouter from "./routers/auth.router";
import userRouter from "./routers/user.router";
import newsRouter from "./routers/news.router"

app.use(bodyParser.json()); // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // for parsing application/x-www-form-urlencoded
app.use(morgan("dev"));
app.use(expressValidator())
app.use(cors());
app.use(cookieParser())

// connect db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    createIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected ");
  });

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const port = process.env.PORT || 8000;

app.use("/api", newRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", newsRouter);

app.listen(port, () => {
  console.log(`server start :${port}`);
});
