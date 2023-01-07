const express = require("express");
const app = express()
const config = require("./src/locals/configs.js")
const db = require("./src/dbconfig/mongoConnect")
const usersRoutes = require("./src/routes/User.routes.js")
const cors = require("cors")

app.use(cors())


app.use(usersRoutes)

app.listen(config.port,()=>{
   // connecting to mySql DB
    db()
    console.log("Serever Started Successfully");
})

