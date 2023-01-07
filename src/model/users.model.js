const mongoose =  require("mongoose")

const userSchema = new mongoose.Schema({
    cell:String,
    dob:{age:Number, date:String},
    email:String,
    gender:String,
    registered:{age:Number, date:String},
    picture:{large:String,medium:String,thumbnail:String},
    name:{first:String,last:String,title:String},
    login:{md5:String,password:String,salt:String,sha1:String,sha256:String,username:String,uuid:String},
    pid:{name:String,value:String},
    location:{city:String, coordinates:{latitude:String, longitude:String}, country:String, postcode:String, state:String, street:{name:String,number:String}, timezone:{description:String, offset:String}}

})

const User = mongoose.model("user",userSchema)
module.exports = User