const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema({
 name: String,
 age:Number

})


module.export = mongoose.model('User', UserSchema);
