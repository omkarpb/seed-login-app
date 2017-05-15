var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema=new Schema({
    username: String,
    password: String,
    firstName:{
        type:String,
        default: ''
    },
    lastName:{
        type:String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    OauthId: String,
    OauthToken: String
    
});


UserSchema.methods.getName = function(){
    return (this.firstName + ' '+ this.lastName);
}

UserSchema.plugin(passportLocalMongoose);



if(mongoose.models.User){
    userModel=mongoose.model('User');
}
else{
    userModel = mongoose.model('User',UserSchema);
}

module.exports = userModel;
