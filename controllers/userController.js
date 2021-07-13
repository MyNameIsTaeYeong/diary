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
    dateAndValue: new Map(),
  });

  const record2 = await Record.create({
    name: "집중력",
    dateAndValue: new Map(),
  });

  const record3 = await Record.create({
    name: "기분",
    dateAndValue: new Map(),
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

export const createRecord = async (req, res) => {
  const { userId, recordName } = req.body;
  try {
    const user = await User.findById(userId);
    console.log(user);
    const record = await Record.create({
      name: recordName,
      dateAndValue: new Map(),
    });

    user.records.push(record);
    user.save();
    res.send({ user, record });
  } catch (error) {
    console.log(error);
  }
};

export const updateRecord = async (req, res) => {
  const { userId, currentDate, recordId, recordIndex, recordValue } = req.body;
  const value = parseInt(recordValue);
  try {
    const user = await User.findById(userId).populate("records");
    const record = await Record.findById(recordId);
    record.dateAndValue.set(currentDate, value);
    user.records[recordIndex] = record;
    record.save();
    user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
