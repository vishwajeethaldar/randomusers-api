const express = require("express")
const app = express.Router()
const axios = require("axios")
const config = require("../locals/configs") 
const userController =  require('../controller/user.controller')
const User = require("../model/users.model")


app.get("/", async(req, res)=>{
   let data = await userController.getAllUsers()
    return res.send(data)
})

app.post("/addusers", async(req, res)=>{
   try{
    let random = Math.floor(Math.random()*(100-50)+50)
    let result = await axios.get(`${config.api}?results=${random}`) 
    let data = await userController.addusers(result.data.results)
    return res.status(data.code).send(data.data)
   }catch(err){
    return res.send(err)
   }
})


app.get("/getusers", async(req, res)=>{
   let {country, gender, limit, page} = req.query
   let data =  await userController.getUsers(gender,country,limit, page)
   return res.status(data.code).send(data.data)
})

app.delete('/deleteusers', async(req, res)=>{
  let response =  await userController.delUsers()
  return res.status(response.code).send(response.msg)
}) 

module.exports = app