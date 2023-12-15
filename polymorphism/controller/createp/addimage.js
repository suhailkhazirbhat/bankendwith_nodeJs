
var db=require('../../model')
const  {Sequelize,Op,QueryTypes} = require('sequelize');
const url = require('url');
const querystring = require('querystring');
var images=db.image
var addimages = async (req,resp)=>{
    let data= await images.create( req.body);

    let response={
        data:data
    }
     resp.status(200).json({response,messeage:"sueccfully"})

}

module.exports={
    
    addimages,}