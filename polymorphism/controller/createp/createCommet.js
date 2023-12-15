
var db=require('../../model')
const  {Sequelize,Op,QueryTypes} = require('sequelize');
const url = require('url');
const querystring = require('querystring');
var commet=db.commet
var addcommet = async (req,resp)=>{
    let data= await commet.create( req.body);
//    let data= await JSON.stringify(req.body)
const parsedUrl = url.parse(req.url);
const query = querystring.parse(parsedUrl.query);

const userId = query.id;
const userId1 = query.name;
console.log(req.body,req.params,userId,userId1)
    let response={
        data:data
    }
     resp.status(200).json({data:response,messeage:"sueccfully"})

}

module.exports={
    
    addcommet,}