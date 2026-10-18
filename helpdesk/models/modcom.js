const banco = require("../config/db")

const mdcom = banco.sequelize.define("comentarios",{
    idcomentario:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ticket_id:{
        type: banco.Sequelize.INTEGER,
        allowNull: false  
    },
    escritor_id:{
        type: banco.Sequelize.INTEGER,
        allowNull: false  
    },
    comentario:{
       type: banco.Sequelize.TEXT,
        allowNull: false  
    }
}, {timestamps: true, freezeTableName: true})

module.exports = mdcom