var mongoose =require("mongoose");

var personSchema = mongoose.Schema({
    name : String,
    address: String
});
var Person = mongoose.model("person",personSchema,"person");

module.exports = Person;