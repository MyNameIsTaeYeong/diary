import User from "../models/User.js";
import Record from "../models/Record.js";

export const googleLogin = (req, res) => {};

export const tempLogin = async (req, res) => {
  const email = "imtaebari@gmail.com";
  try {
    const user = await User.findOne({ email }).populate("records");
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export const tempJoin = async (req, res) => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month =
    dateObj.getMonth() < 9
      ? "0" + (dateObj.getMonth() + 1)
      : dateObj.getMonth() + 1;
  const date =
    dateObj.getDate() < 9 ? "0" + dateObj.getDate() : dateObj.getDate();

  const key = year + month + date;

  const record1 = await Record.create({
    name: "수면",
  });

  const record2 = await Record.create({
    name: "집중력",
  });

  const record3 = await Record.create({
    name: "기분",
  });

  const records = [];
  records.push(record1);
  records.push(record2);
  records.push(record3);

  const user = await User.create({
    email: "imtaebari@gmail.com",
    records,
  });

  res.send(user);
};
