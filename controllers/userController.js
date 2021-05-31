import User from "../models/User.js";
import Record from "../models/Record.js";

export const googleLogin = (req, res) => {};

export const tempLogin = (req, res) => {};

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

  const records = new Map();
  records.set(key, [record1, record2, record3]);

  const user = await User.create({
    email: "imtaebari@gmail.com",
    records,
  });

  res.send(user);
};
