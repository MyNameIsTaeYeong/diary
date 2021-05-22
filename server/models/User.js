import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    default: "haha",
  },
});

const Model = mongoose.model("User", UserSchema);

export default Model;
