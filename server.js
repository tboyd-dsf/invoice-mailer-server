const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./config/passport');

const PORT = process.env.PORT || 3030;
const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./controllers/authController")(app);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API.'
  })
})

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`Server Status: Running. Active Listening to PORT: ${PORT}`);
  })
})