import express from "express";
import {
  googleLogin,
  tempJoin,
  tempLogin,
} from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.get("/google", googleLogin);
authRouter.get("/templogin", tempLogin);
authRouter.get("/join", tempJoin);

export default authRouter;
