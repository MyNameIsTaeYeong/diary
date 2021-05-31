import mongoose from "mongoose";
const { Schema } = mongoose;

const RecordSchema = new Schema({
  name: String,
  value: Number,
});

const Model = mongoose.model("Record", RecordSchema);

export default Model;
