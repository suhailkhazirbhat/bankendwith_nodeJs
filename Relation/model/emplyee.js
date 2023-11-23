

module.exports=(sequelize,DataTypes)=>{
    const Emplyee=sequelize.define('emplyee',{
        
        name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        gender:{type:DataTypes.STRING}
    },{
    
});
    return Emplyee;
}