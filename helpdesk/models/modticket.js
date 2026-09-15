const banco = require("../config/db")

const mdticket = banco.sequelize.define("ticket",{





}, {timestamps: false, FreezeTableName: true})

module.exports = mdticket