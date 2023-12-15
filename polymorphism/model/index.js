const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('product', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging:true,
    // define: {timestamps:false}
}


)
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
db.commet = require('./commit')(sequelize,DataTypes);
db.vedio = require('./vedios')(sequelize,DataTypes);
db.image = require('./images')(sequelize,DataTypes);



// relation ---------------------

db.image.hasOne(db.commet,{
    foreignkey:'commenTableId',
    constraints:false,
    scope:{
        commentableType:'image'
    }
})

db.vedio.hasOne(db.commet,{
    foreignkey:'commenTableId',
    constraints:false,
    scope:{
        commentableType:'vedio'
    }
})

db.commet.belongsTo(db.image,{foreignkey:'commenTableId',
constraints:false,})
db.commet.belongsTo(db.vedio,{foreignkey:'commenTableId',
constraints:false,})

// db.sequelize.sync({force:false});
// db.sequelize.sync({force:true})

module.exports = db

