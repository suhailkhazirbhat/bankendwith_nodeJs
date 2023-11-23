var db=require('../model')
const  {Sequelize,Op,QueryTypes} = require('sequelize');
var Emplyee=db.emplyee
var EmplyeeDetail=db.emplyeeDetail


// var Sequelize=db.Sequelize
var addEmplyee = async (req,resp)=>{
    
    let data= await Emplyee.create({name:'emp1demo1',email:'demo1@gmail.com',gender:"male"});
    // console.log(Users,"kkkk")
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"sueccfully"})

}
var emplyeeDetail = async (req,resp)=>{
    let data= await EmplyeeDetail.create({empid:1,name:'delait3_demo',email:'demo1@gmail.com',gender:"male"});
    // console.log(Users,"kkkk")
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"sueccfully"})

}

// var emplyeeDetails = async (req,resp)=>{
//     let data= await Emplyee.findAll({})
//     let response={
//         data:'ok'
//     }
//      resp.status(200).json({data:data,messeage:"sueccfully"})

// }

var oneTo_one=async (req,resp)=>{
        let data= await Emplyee.findAll({
            attributes:['name'],
            
              include:[{model:EmplyeeDetail,attributes:['name'],as:'detail'}],
              where :{id:1}

        })
        resp.status(200).json({data:data,messeage:"sueccfully"})
    
    }



module.exports={
    emplyeeDetail,
    addEmplyee,
    oneTo_one
    // emplyeeDetails
}