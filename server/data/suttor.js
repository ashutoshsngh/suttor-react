var mongoose = require("mongoose");
var suttorSchema = mongoose.Schema({
    suttacount: String,
    userid: String,
    created: String,
    amount: String
});

module.exports = mongoose.model("suttor", suttorSchema);