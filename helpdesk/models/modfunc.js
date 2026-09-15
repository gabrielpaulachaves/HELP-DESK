const banco = require("../config/db")

const mdfuc = banco.sequelize.define("funcionarios", {






}, {timestamps: false, freezeTableName: true})

console.log(mdfuc)

module.exports = mdfuc