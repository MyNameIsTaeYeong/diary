import dotenv from "dotenv";
import passport from "passport";
import passportGoogle from "passport-google-oauth";
import User from "./models/User.js";

dotenv.config();

const GoogleStrategy = passportGoogle.OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile.id);
    }
  )
);
