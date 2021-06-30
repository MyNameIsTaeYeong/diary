import express from "express";
import passport from "passport";
import { addRecord, googleLogin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/addRecord", addRecord);

export default userRouter;
