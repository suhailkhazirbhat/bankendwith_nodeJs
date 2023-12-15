var db=require('../../model')
const  {Sequelize,Op,QueryTypes} = require('sequelize');
var vedio1=db.vedio
var image1=db.image
var commet1=db.commet
var vedio=async (req,resp)=>{
    let data= await vedio1.findAll({})
    resp.status(200).json({data:data,messeage:"sueccfully"})

}
var image=async (req,resp)=>{
    let data= await image1.findAll({})
    resp.status(200).json({data:data,messeage:"sueccfully"})

}
var commet=async (req,resp)=>{
    let data= await commet1.findAll({})
    resp.status(200).json({data:data,messeage:"sueccfully"})

}

var polymorfic=async (req,resp)=>{
    // let data= await commet1.findAll({
    //     include:[{
    //         model: image1 
    //     }]
    // })


    let data= await commet1.findAll({
        include:[{
            model: image1 
        },{model:vedio1}]
    })
    resp.status(200).json({data:data,messeage:"sueccfully"})

}




module.exports={vedio,image,commet,polymorfic}
