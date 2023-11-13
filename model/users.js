// const { Sequelize } = require("sequelize");

// const { timeStamp } = require("console");

// const { DataTypes } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define('users',{
        name:DataTypes.STRING,
        email:{type:DataTypes.STRING,
        defaultValue:'test@gmail.com'},
        gender:{type:DataTypes.STRING,}
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