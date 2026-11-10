//npm init -y
//npm install --save express
//npm install nodemon -g
//npm install sequelize
//npm install --save mysql2
//npm install dotenv
//npm install --save bcrypt

require("dotenv").config()
const express = require("express")
const app = express()
const {sequelize} = require("./config/db")
const modelfunc = require("./models/modfunc")
const modelsetor = require("./models/modsetor")
const modelticket = require("./models/modticket")
const modelcom = require("./models/modcom")
const funcionarios = require("./routes/func")
const setor = require("./routes/setor")
const ticket = require("./routes/ticket")
const comentarios = require("./routes/com")
require("./helpers/auth")


modelfunc.belongsTo(modelsetor, {foreignKey: "setor_id"})
modelsetor.hasMany(modelfunc, {foreignKey: "setor_id"})

modelticket.belongsTo(modelfunc, {foreignKey: "relator_id", as:"relator"})
modelfunc.hasMany(modelticket, {foreignKey: "relator_id"})

modelcom.belongsTo(modelticket, {foreignKey: "ticket_id"})
modelticket.hasMany(modelcom, {foreignKey:  "ticket_id"})

modelcom.belongsTo(modelfunc, {foreignKey: "escritor_id"})
modelfunc.hasMany(modelcom, {foreignKey: "escritor_id"})

app.use(express.json())

app.use("/comentarios", comentarios)
app.use("/ticket", ticket)
app.use("/setor", setor)
app.use("/funcionarios", funcionarios)

sequelize.sync().then(()=>{
    console.log("Servidor conectado")
const port = 3333
app.listen(port, ()=>{
    console.log("Servidor aberto")
})
}).catch((err)=>{return console.log(`Erro: ${err}`)})







