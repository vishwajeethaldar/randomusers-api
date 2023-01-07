const dotenv = require("dotenv")
dotenv.config()

const localConfig = {
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    pwd:process.env.MYSQLPWD,
    db:process.env.MYSQLDB,
    port:process.env.PORT,
    mongouri:process.env.MONGOURI,
    api:process.env.USERAPI
}

module.exports = localConfig