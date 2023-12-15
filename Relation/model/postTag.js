// const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
const Post_Tag= sequelize.define("post_tags", 
{
    postId: DataTypes. INTEGER,
    tagId: DataTypes. INTEGER, 
},{ timestamps: false });

return Post_Tag;

}