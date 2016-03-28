var mongoose = require('mongoose');
var schema = mongoose.Schema;
// define our user model
// module.exports allows us to pass this to other files when it is called
var userschema = new schema({
    name : String,
    email: String,
    password: String,
    repassword: String
});
module.exports = mongoose.model('User', userschema);