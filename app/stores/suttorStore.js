var dispatcher = require("../dispatcher");
var suttorService = require("../services/suttorService");
var userService = require("../services/userService");
var userLoginService = require("../services/userLoginService");
var reactCookie = require("react-cookie");

function SuttaStore() {
    var listeners = [];

    function onChange(listener) {
        getSchools(listener);
        listeners.push(listener);
    }

    function getSchools(cb){
        suttorService.getSchools().then(function (res) {
            cb(res);
        });
    }

    function addSutta(sutta) {
        suttorService.addSutta(sutta).then(function (res) {
            triggerListeners();
        });
    }

    function deleteSutta(sutta) {
        suttorService.deleteSchool(sutta).then(function (res) {
            triggerListeners();
        });
    }

    function addUser(user) {
        userService.addUser(user).then(function (res) {
            triggerListeners();
        })
    }

    function getUser(user) {
        userService.getUser(user).then(function(res){
            triggerListeners();
        })
    }

    function loginUser(user) {
        userLoginService.loginUser(user).then(function(res) {
            var userinfo = res[0];
            var id = userinfo._id;
            reactCookie.save('session',id);
            triggerListeners();
        })
    }

    function triggerListeners() {
        getSchools(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "sutta") {
            switch (split[1]) {
                case "addSutta":
                    addSutta(payload.sutta);
                    break;
                case "deleteSutta":
                    deleteSutta(payload.sutta);
                    break;
            }
        }

        if (split[0] === "user") {
            switch (split[1]) {
                case "addUser":
                    addUser(payload.user);
                    break;
                case "removeUser":
                    deleteUser(payload.user);
                    break;
                case 'loginUser':
                    loginUser(payload.user);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = SuttaStore();