import express from "express";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  })
);

globalRouter.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    res.send(req.user.id);
  }
);

export default globalRouter;
