import express from "express";
import passport from "passport";
import { googleLogin } from "../controllers/userController.js";

const userRouter = express.Router();

export default userRouter;
