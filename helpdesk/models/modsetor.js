const banco = require("../config/db")

const mdsetor = banco.sequelize.define("setor",{





}, {timestamps: false, freezeTableName: true})

module.exports = mdsetor