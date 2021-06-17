var mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name: {type:String, required :true},
    email : {type: String, required:true, unique: true, dropDups: true},
    password: {type: String, required: true},
    isAdmin : {required: true, type : Boolean, required:true, default: false}
});
var Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
