const mongoose = require("mongoose")
const config = require("../locals/configs.js")

function connectMdb (){
    mongoose.set('strictQuery', true);
    // console.log(connect);
    return  mongoose.connect(config.mongouri)
}

module.exports = connectMdb