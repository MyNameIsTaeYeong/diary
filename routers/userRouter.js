import express from "express";
import passport from "passport";
import {
  createRecord,
  googleLogin,
  updateRecord,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/addRecord", createRecord);
userRouter.post("/updateRecord", updateRecord);

export default userRouter;
