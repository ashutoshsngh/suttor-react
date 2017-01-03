var mongoose = require("mongoose");
var Suttor = require("../data/suttor");
var User = require("../data/user");
var _ = require("underscore");

var router = require("express").Router();
router.route("/sutta/:id?").get(getSchools).post(addSutta).delete(deleteSchool);
router.route("/user/register:id?").get(getUser).post(addUser).delete(deleteUser);
router.route("/user/login/:id?").get(loginUser1).post(loginUser).delete(deleteUser);

function getSchools(req, res) {
    var userid = req.params.id;
    Suttor.find({userid:userid},function (err, schools) {
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

function getUser(req,res) {
    User.find(function (err, user) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
}

function addUser(req,res) {
    var user = new User(_.extend({}, req.body));
    user.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
}

function deleteUser(req,res) {

}

function loginUser(req,res) {
    var user = new User(_.extend({}, req.body));
    User.find({email:user.email,password:user.password},function (err, user) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
}

function loginUser1(req,res) {
    var loginres = res[0];
    console.log(loginres);
}

module.exports = router;
