const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/google/callback",
    passReqToCallback: true,
  },
      function(request, accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
        
      }
  )
);

passport.serializeUser(function(user, done) {
    done(null, user);
    });

passport.deserializeUser(function(user, done) {
    done(null, user);
});