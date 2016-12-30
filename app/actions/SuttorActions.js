var dispatcher = require("../dispatcher");

module.exports = {
    addSuttaCount:function(sutta){
        dispatcher.dispatch({
            sutta:sutta,
            type:"sutta:addSutta"
        });
    },
    removeSuttaCount:function(school){
        dispatcher.dispatch({
            sutta:sutta,
            type:"sutta:deleteSutta"
        });
    }
}
