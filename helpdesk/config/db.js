const Sequelize = require("sequelize")//fabricante
const sequelize = new Sequelize(Nome, usuario, senha, {local, tipodobd})//modelo usando esse fabricante


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}



