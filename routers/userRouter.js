import express from "express";
import passport from "passport";
import { createRecord, googleLogin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/addRecord", createRecord);

export default userRouter;
