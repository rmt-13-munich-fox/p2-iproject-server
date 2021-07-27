require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port;
const cors = require('cors');
const routes = require('./routers');
const FacebookStrategy = require('passport-facebook').Strategy

app.use(cors());
app.use(express.urlencoded({ extended: true }));

passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID_FB,
  clientSecret: process.env.CLIENT_SECRET_FB,
  callbackURL: "http://localhost:3000/auth/facebook/covidBase"
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/covidBase',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });

app.use(routes);



app.listen(port, () => console.log(`Server listen on port ${port}`))