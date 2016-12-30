var mongoose = require("mongoose");
var suttorSchema = mongoose.Schema({
    suttacount: String
});

module.exports = mongoose.model("suttor", suttorSchema);