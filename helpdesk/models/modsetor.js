
const banco = require("../config/db")

const mdsetor = banco.sequelize.define("setor",{
        idsetor:{
            type: banco.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        setor:{
            type: banco.Sequelize.STRING,
            allowNull: false
        }
}, {timestamps: true, freezeTableName: true})

module.exports = mdsetor