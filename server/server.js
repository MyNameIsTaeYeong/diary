import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
