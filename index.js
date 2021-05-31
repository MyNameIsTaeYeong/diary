import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./db.js";
import authRouter from "./routers/authRouter.js";

dotenv.config();
const app = express();

const corsOption = {
  origin: "http://localhost:3000", // 허락하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOption));

app.use("/auth", authRouter);

app.listen(process.env.SERVERPORT, () => {
  console.log(
    `listening at http://localhost:${process.env.SERVERPORT}🧡🧡🧡🧡🧡`
  );
});
