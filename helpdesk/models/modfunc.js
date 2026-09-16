const banco = require("../config/db")

const mdfuc = banco.sequelize.define("funcionarios", {
    idfuncionario:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }





}, {timestamps: false, FreezeTableName: true})

console.log(mdfuc)

module.exports = mdfuc