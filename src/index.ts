import express from "express";
import diaryRouter from "./routes/diaries.router";
import dotenv from "dotenv";

dotenv.config();

const BACK_LOCAL_PORT: string | undefined = process.env.BACK_LOCAL_PORT;
const BACK_URL_PORT: string | undefined = process.env.BACK_URL_PORT;

const app = express();

app.use(express.json());

const PORT = BACK_LOCAL_PORT || BACK_URL_PORT;

app.get("/ping", (_req, res) => {
  console.log("Someone pinged here");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
