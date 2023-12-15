module.exports=(sequelize,DataTypes)=>{
    const commet=sequelize.define('commet',{
        title:DataTypes.STRING,
        commenTableId:DataTypes.INTEGER,
        commentableType:DataTypes.STRING,
        imageId:DataTypes.INTEGER,
        
       
    },{
    // tableName:"userdate"
    // timestamps:false,
    // updatedAt:false,
    // createdAt:false
    // updatedAt:'modifid',
    // createdAt:'generated'
});
    return commet;
}