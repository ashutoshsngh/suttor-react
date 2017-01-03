var dispatcher = require("../dispatcher");

module.exports = {
    addUser:function(user){
        dispatcher.dispatch({
            user:user,
            type:"user:addUser"
        });
    },
    removeUser:function(school){
        dispatcher.dispatch({
            user:user,
            type:"user:deleteUser"
        });
    },
    loginUser:function(user) {
        dispatcher.dispatch({
            user:user,
            type:"user:loginUser"
        });
    }
}
