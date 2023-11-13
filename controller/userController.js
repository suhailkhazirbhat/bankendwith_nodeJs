var db=require('../model')

var Users=db.users
var addUser = async (req,resp)=>{
    let data= await Users.create({name:'demo',email:'demo@gmail.com'});
    // console.log(Users,"kkkk")
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"sueccfully"})

}
module.exports={
    addUser
}