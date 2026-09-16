const Sequelize = require("sequelize")//fabricante
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {host: process.env.DB_LOCAL, dialect: process.env.DB_TYPE})//modelo usando esse fabricante

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}



