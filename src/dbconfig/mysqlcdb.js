const mysql =  require("mysql")
const config = require("../locals/configs.js")

function dbcon() {
    const con = mysql.createConnection({
        host:config.host,
        user:config.user,
        password:config.pwd,
        database:config.db
    })

    con.connect((err,conn)=>{
        if(err){
            throw err
        }else{
            console.log("MySql DB Connected Successfully");
        }
    })
}

module.exports = dbcon