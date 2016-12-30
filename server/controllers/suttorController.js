var mongoose = require("mongoose");
var Suttor = require("../data/suttor");
var _ = require("underscore");

var router = require("express").Router();
router.route("/sutta/:id?").get(getSchools).post(addSutta).delete(deleteSchool);

function getSchools(req, res) {
    Suttor.find(function (err, schools) {
        console.log(schools);
        if (err)
            res.send(err);
        else
            res.json(schools);
    });
}

function addSutta(req, res) {
    var sutta = new Suttor(_.extend({}, req.body));
    sutta.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(sutta);
    });
}

function deleteSchool(req, res) {
    var id = req.params.id;
    Suttor.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
