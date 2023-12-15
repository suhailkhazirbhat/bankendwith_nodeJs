module.exports=(sequelize,DataTypes)=>{
    const vedio=sequelize.define('vedio',{
        title:DataTypes.STRING,
        text:DataTypes.STRING,
        // vedioId:DataTypes.STRING
        // commentableType:DataTypes.STRING,
        
       
    },{
    // tableName:"userdate"
    // timestamps:false,
    // updatedAt:false,
    // createdAt:false
    // updatedAt:'modifid',
    // createdAt:'generated'
});
    return vedio;
}