const db = require('../models');
const passport = require('passport');

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json({
            email: req.user.email,
            id: req.user.id
        })
    });

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    })

    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login")
        }).catch(function(err) {
            res.status(401).json(err)
        })
    })
}