module.exports=(sequelize,DataTypes)=>{
    const image=sequelize.define('image',{
        title:DataTypes.STRING,
        url:DataTypes.STRING,
        // commentableType:DataTypes.STRING,
        
       
    },{
    // tableName:"userdate"
    // timestamps:false,
    // updatedAt:false,
    // createdAt:false
    // updatedAt:'modifid',
    // createdAt:'generated'
});
    return image;
}