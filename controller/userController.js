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
var curdCreate = async (req,resp)=>{
    let data= await Users.create({name:'demo1',email:'demo@gmail.com'});
    
    // let data= await Users.bulkCreate([{name:'demo1',email:'demo@gmail.com'},{name:'demo1',email:'demo@gmail.com'},{name:'demo1',email:'demo@gmail.com'}]);
    
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"sueccfully"})

}
var curdUpdate = async (req,resp)=>{
    let data= await Users.update({name:'suhail',email:'demo@gmail.com'},{
        where:{id:1}
    })
    // console.log(Users,"kkkk")
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"curdUpdate"})

}
var curdDelete = async (req,resp)=>{
    let data= await Users.destroy({
        where:{id:3}
    })

    //// it complete total entry delete
    // let data= await Users.destroy({
    //     truncate:true
    // })
    
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"curdDelete"})

}
var curdfindAll = async (req,resp)=>{
    let data= await Users.findAll()

    //// it complete total entry delete
    // let data= await Users.destroy({
    //     truncate:true
    // })
    
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"curdfindAll"})

}

module.exports={
    curdfindAll,
    curdDelete,
    addUser,curdCreate,curdUpdate
}