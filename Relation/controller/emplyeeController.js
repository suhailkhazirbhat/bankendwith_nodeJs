var db=require('../model')
const  {Sequelize,Op,QueryTypes} = require('sequelize');
var Emplyee=db.emplyee
var EmplyeeDetail=db.emplyeeDetail

var Post=db.post;
var tag=db.tag
var postTag=db.postTag

// var Sequelize=db.Sequelize
var addEmplyee = async (req,resp)=>{
    
    let data= await Emplyee.create({name:'emp2demo2',email:'demo1@gmail.com',gender:"male"});
    // console.log(Users,"kkkk")
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"sueccfully"})

}
var PostCreate = async (req,resp)=>{
    
   let data= await Post.create({name:`name__3`,title:'title___3',content:'content3',user_id:3});
    
    // console.log(Users,"kkkk")
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"sueccfully"})

}
var createTag = async (req,resp)=>{
    
    let data= await tag.create({name:`sports`});
     
     // console.log(Users,"kkkk")
     let response={
         data:'ok'
     }
      resp.status(200).json({data:data,messeage:"sueccfully"})
 
 }

 var createPostTag = async (req,resp)=>{
    
    let data= await postTag.create({postId:1,tagId:2});
     
     // console.log(Users,"kkkk")
     let response={
         data:'ok'
     }
      resp.status(200).json({data:data,messeage:"sueccfully"})
 
 }
var emplyeeDetail = async (req,resp)=>{
    // console.log(Users,"kkkk")
    let data= await Post.create({name:'emp2demo2',email:'demo1@gmail.com',gender:"male"});
    
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
              where :{id:2}

        })
        resp.status(200).json({data:data,messeage:"sueccfully"})
    
    }

    var belongsTo=async (req,resp)=>{
        let data= await EmplyeeDetail.findAll({
            attributes:['name'],
            
              include:[{model:Emplyee,attributes:['name'],as:'detail'}],
              where :{id:4}

        })
        resp.status(200).json({data:data,messeage:"sueccfully"})
    
    }  
    
    
    var manyToMany=async (req,resp)=>{
        // let data= await Post.findAll({
        //     include:[{model:tag}],
        // })
        // resp.status(200).json({data:data,messeage:"sueccfully"})


        let data= await tag.findAll({
            include:[{model: Post }],
        })
        resp.status(200).json({data:data,messeage:"sueccfully"})
    
    }



module.exports={
    emplyeeDetail,
    addEmplyee,
    oneTo_one,
    belongsTo,
    manyToMany,
    PostCreate,
    createTag,
    createPostTag
    
    // emplyeeDetails
}