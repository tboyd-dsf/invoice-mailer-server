const db = require('../models');

module.exports = function(app) {
    app.post("/api/addcust", function (req, res) {
        db.Customers.create({
            propname: req.body.propname,
            managername: req.body.managername,
            email: req.body.email,
            active: req.body.active
        }).then(function() {
            res.json(req.body)
        }).catch(function(err) {
            res.status(401).json(err)
        })
    })
}