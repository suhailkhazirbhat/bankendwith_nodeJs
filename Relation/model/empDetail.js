

module.exports=(sequelize,DataTypes)=>{
    const EmplyeeDetail=sequelize.define('emplyeeDetail',{
        empid:{type: DataTypes.INTEGER,
           },
        name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        gender:{type:DataTypes.STRING}
    },{
    
});
    return EmplyeeDetail;
}