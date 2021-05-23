import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(`mongodb://localhost/${process.env.PROJECT}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connect! 💚💚💚💚💚");
});
