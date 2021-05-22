import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./db.js";
import "./passport.js";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/text", (req, res) => {
  console.log(req.body);
  const rtnData = {
    name: "임태영",
    content: "존잘",
  };
  res.send(rtnData);
});

app.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`);
});
