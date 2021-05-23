import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./db.js";
import globalRouter from "./routers/globalRouter.js";
//import passport from "passport";
//import "./passport.js";

dotenv.config();
const app = express();

const corsOption = {
  origin: "http://localhost:3000", // 허락하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

//app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOption));

//app.use("/", globalRouter);

app.post("/text", (req, res) => {
  console.log(req.body);
  const rtnData = {
    name: "임태영",
    content: "존잘",
  };
  res.send(rtnData);
});

app.listen(process.env.SERVERPORT, () => {
  console.log(
    `listening at http://localhost:${process.env.SERVERPORT}🧡🧡🧡🧡🧡`
  );
});

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:3000/",
//   }),
//   function (req, res) {
//     console.log(req.user.id);
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
//     res.send(req.user.id);
//   }
// );
