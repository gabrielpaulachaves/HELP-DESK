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
    },
    status:{
        type: banco.Sequelize.ENUM("aberto", "em andamento", "solucionado"),
        defaultValue: "aberto",
        allowNull: false
    }
}, {timestamps: true, freezeTableName: true})

module.exports = mdticket