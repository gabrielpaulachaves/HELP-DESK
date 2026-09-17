const banco = require("../config/db")

const mdticket = banco.sequelize.define("ticket",{
    idticket:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    relator_id:{
        type: banco.Sequelize.INTEGER,
        allowNull: false   
    },
    titulo:{
        type: banco.Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: banco.Sequelize.TEXT,
        allowNull: false
    }
}, {timestamps: false, FreezeTableName: true})

module.exports = mdticket