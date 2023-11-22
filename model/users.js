// const { Sequelize } = require("sequelize");

// const { timeStamp } = require("console");

// const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define('users',{
        name:{type:DataTypes.STRING,
            // setter function we can add the any thing after the value of fleid know setter
            // set(value){
            //     this.setDatavalue('name',value+'Data')
            // },
            // // getter function we can find the any thing after the value of fleid know setter makes to combine fileds then output by same this field
            // get(){
            //     return this.getDatavalue('name'+'xyz'+this.email)
            // }
        
        },
        email:{type:DataTypes.STRING,
        defaultValue:'test@gmail.com',
        allowNull:false,
        unique:true
    },
        gender:{type:DataTypes.STRING,
        // validate:{
        //     // isIn:[['male','female']],
        //     equals:'male'
        // }
        validate:{
                
                // equals:{
                //     args:'male',
                //     msg:'please enter Only Male'
                // },
                // isIn:{
                //     args:[['male','female']],
                //     msg:'please enter  Male or female'
                // }

            }

        
        }
    },{
    // tableName:"userdate"
    // timestamps:false,
    // updatedAt:false,
    // createdAt:false
    // updatedAt:'modifid',
    // createdAt:'generated'
});
    return Users;
}