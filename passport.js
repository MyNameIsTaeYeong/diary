import dotenv from "dotenv";
import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import User from "./models/User.js";

dotenv.config();

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4002/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      const user = {
        id: profile.id,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
