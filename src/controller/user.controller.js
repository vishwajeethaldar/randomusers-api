const User = require("../model/users.model")

// get users based on queries
async function getUsers(gender, country, limit, page) {
    let userData  = []
    let total = 0;
    limit = limit==='undefined'?10:limit; // default limit is 10  
    page = page!=='undefined'?page:0; // default page is 0 
   
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
    return {users:userData, totalPages:total}
}

// add Users into database
 const addusers = async(data=[])=>{
    try {
        await User.insertMany(data)
        let users = await User.find()
        return users
    } catch (error) {
        throw error
    }
}

// Delete All Users from Database
async function delUsers() {
    let response = await User.deleteMany({})
    return response
}

// get All users 
async function getAllUsers (){
    let users  = await User.find({})
    return users
}
module.exports = {getUsers, addusers,delUsers, getAllUsers};