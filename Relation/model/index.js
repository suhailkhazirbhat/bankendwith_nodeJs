const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('product', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging:true
})
sequelize.authenticate()
    .then(() => {

        console.log("connected");

    })

    .catch(err => {

        console.log("Error" + err);

    })

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.emplyee = require('./emplyee')(sequelize,DataTypes);
db.emplyeeDetail = require('./empDetail')(sequelize,DataTypes);
db.emplyee.hasOne(db.emplyeeDetail,{foreignKey:'empid',as:'detail'})
db.emplyeeDetail.belongsTo(db.emplyee,{foreignKey:'empid',as:'detail'})

// db.sequelize.sync({force:true});  this condition first drop table then again create
// db.sequelize.sync({force:false});  this condition checks if table exist then no table drop the // default
// db.sequelize.sync({force:true,match:'/test$/'})
// db.sequelize.sync({force:true})
// .then(()=>console.log(' yes re sync'))

module.exports = db

