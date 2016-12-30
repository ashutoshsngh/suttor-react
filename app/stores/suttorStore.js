var dispatcher = require("../dispatcher");
var suttorService = require("../services/suttorService");

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
    });

    return {
        onChange: onChange
    }
}

module.exports = SuttaStore();