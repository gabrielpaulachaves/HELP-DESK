const banco = require("../config/db")

const mdfuc = banco.sequelize.define("funcionarios", {
    idfuncionario:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
       type: banco.Sequelize.STRING,
       allowNull: false 
    },
    usuario:{
        type: banco.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
      type: banco.Sequelize.STRING,
        allowNull: false  
    },
    funcao:{
        type: banco.Sequelize.STRING,
        allowNull: false 
    },
    setor_id: {
        type: banco.Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: true, freezeTableName: true})


module.exports = mdfuc