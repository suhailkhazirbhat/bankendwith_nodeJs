var db=require('../model')
const  {Sequelize,Op,QueryTypes} = require('sequelize');
var Users=db.users
// var Sequelize=db.Sequelize
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
// query

var queryUser = async (req,resp)=>{
    // it takes only those fields which are pass in array 
    let data= await Users.create({name:'queryUser',email:'demo@gmail.com'},{fields:['email']});
    
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"querysueccfully"})

}
// select
var queryfindAll = async (req,resp)=>{
    // let data= await Users.findAll(
    //     {attributes:[
    //         'name',
    //         ['email','Id'],
    //         // indivilues
    //         // [Sequelize.fn('COUNT', Sequelize.col('email')), 'count'],
    //         [Sequelize.fn('CONCAT', Sequelize.col('email'),'Id'), 'CCC'],
    //     ]}
    // )
    // let data= await Users.findAll(
    //     {attributes:
    //         {exclude:['createdAt','updatedAt'],
    //         include:[
    //             [Sequelize.fn('CONCAT', Sequelize.col('name'),'sing'), 'fullName'],
    //         ]}
    //     }
    // ) 

    
    let response={
        data:data
    }
     resp.status(200).json(response)

}
// condition
var querycondition = async (req,resp)=>{
    // it takes only those fields which are pass in array 
    let data= await Users.findAll({
        // where:{
        // id:{
        //     [Op.eq]:4
        // },
        // email:{
        //     [Op.like]:'%@gmail.com'
        // },
        // [Op.or]: [
        //     { Id: 2 },
        //     { Id: 4 }
        //   ]
       
    // }
    order:[
        ['name','DESC'],
        
    ],
    limit:3,
    offset:1,
    // group:['email']
});
    
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messeage:"idquerysueccfully"})

}


// for count
// var querycondition = async (req,resp)=>{
//     // it takes only those fields which are pass in array 
//     let data= await Users.count({});
    
//     let response={
//         data:'ok'
//     }
//      resp.status(200).json({data:data,messeage:"idquerysueccfully"})

// }

// Finders
var finders = async (req,resp)=>{
        // it find by primary key ->findByPk

        // let data= await Users.findByPk(3);
        // if (data === null) {
        //     console.log('Not found!');
        //   } else {
        //     console.log(data instanceof Users); // true
        //     // Its primary key is 123
        //   }
        // findOrCreate
        // let [data,created]= await Users.findOrCreate({
        //     where: { name: 'sdepold' },
        //     defaults: {
        //       job: 'Technical Lead JavaScript'
        //     }
        //   });
        //   console.log(data.name); // 'sdepold'
        // //   console.log(data.job); // This may or may not be 'Technical Lead JavaScript'
        //   console.log(created); // The boolean indicating whether this instance was just created
        //   if (created) {
        //     console.log(data.name); // This will certainly be 'Technical Lead JavaScript'
        //   }
        // const { count, rows } = await Users.findAndCountAll({
        //     where: {
        //       name: {
        //         [Op.like]: 'suhail%'
        //       }
        //     },
        //     offset: 10,
        //     limit: 2
        //   });
        //   console.log(count);
        //   console.log(rows);
        
        // let response={
        //     data:'ok'
        // }
        //  resp.status(200).json({data:rows,messeage:"idquerysueccfully",c:count})
    
    }
 const validtion   = async (req,resp)=>{
    let data
    const messages={}
    try {
        let data= await Users.create({name:'demo',email:'demo411499d@gmail.com',gender:'male'});
        messages

    } catch (e) {
        data=e
        console.log(e)
       
        e.errors.forEach((error) => {
            let message;
        
        // switch (error.validatorKey) {
            
        //     case 'not_unique':
        //         message='Duplicate Email';
                
        //         break;
        //         case 'isIn':
        //             message='male or female is not';
                    
        //             break; 
        //             case 'equals':
        //                 console.log(error.message)
        //                 message='male or female is not';
                        
        //                 break;           
               
        
           
        // }
        message=error.message
        messages[error.path]=message;
        console.log(messages)
    });
    }
   
    let response={
        data:'ok'
    }
     resp.status(200).json({data:data,messages})

 }

const rawQuerry=async(req,resp)=>{
    const users=await db.sequelize.query('Select * from users where gender=$gender',{
        // 1 ->Select * from users where gender=:gender
        // 2-> Select * from users where gender=?
       
        type:QueryTypes.SELECT,
        // model:Users,
        // mapToModel:true,
        // raw:true
        // 1-> replacements:{gender:'male'}
        // 2->replacements:['female']
        // replacements:{gender:['male','females']} where gender IN (:gender)
        // replacements:{searchEmail:'%@gmail.com'} where email LIKE :searchEmail
        bind:{gender:'male'}
        


    })
    let response={
        data:'ok',RECORDS:users
    }
     resp.status(200).json(response)


}


module.exports={
    rawQuerry,
    validtion,
    queryfindAll,
    queryUser,
    curdfindAll,
    curdDelete,
    addUser,curdCreate,curdUpdate,querycondition,finders
}