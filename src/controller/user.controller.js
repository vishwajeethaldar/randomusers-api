const User = require("../model/users.model")

// get users based on queries
async function getUsers(gender, country, limit, page) {
    let userData  = []
    let total = 0;

    limit = limit==='undefined'||!limit?10:limit; // default limit is 10  
    page = page!=='undefined'||!page?page:0; // default page is 0 
   
   try{
    if(gender!=="undefined"&&gender&&country!=='undefined'&&country){
        total =await (await User.find({'location.country':country, gender:gender})).length
        userData = await User.find({'location.country':country, gender:gender}).limit(limit).skip(page*limit)
    }else if(gender!=='undefined'&&gender){
      
        total =await (await User.find({gender:gender})).length
        userData = await User.find({gender:gender}).limit(limit).skip(page*limit)

    }else if(country!=='undefined'&&country){
        
        total =   total =await (await User.find({'location.country':country})).length
        userData = await User.find({'location.country':country}).limit(limit).skip(page*limit)
      
    }else{
        total= await (await User.find()).length
         userData = await User.find({}).limit(limit).skip(page*limit)
    }
    total= Math.ceil(total/10)
  
    return {code:200, data:{users:userData, totalPages:total}}
   }catch(e){
    return {code:500, data:e.message}
   }

}

// add Users into database
 const addusers = async(data=[])=>{
   
    try {
        await User.insertMany(data)
        let users = await User.find()
        return {code:200, data:users}
    } catch (e) {
        return {code:500, data:e.message}
    }
}

// Delete All Users from Database
async function delUsers() {
    try{
        let users = await User.find()
        if(users.length===0){
            return {code:404, msg:"Database is already empty"}
        }
        await User.deleteMany({})
        return {code:200, msg:"Deleted Successfully"}
    }   catch(e){
        return {code:500, msg:e.message}
    }
}

// get All users 
async function getAllUsers (){
    try{
        let users  = await User.find({})
        return users
    }catch(e){
        return {code:500, msg:e.message}
    }
}
module.exports = {getUsers, addusers,delUsers, getAllUsers};