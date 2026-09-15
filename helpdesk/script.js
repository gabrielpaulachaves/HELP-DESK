//npm init -y
//npm install --save express
//npm install nodemon -g
//npm install sequelize
//npm install --save mysql2
//npm install dotenv

const express = require("express")
const app = express()
const {sequelize} = require("./config/db")
require("./models/modfunc")
require("./models/modsetor")
require("./models/modticket")
const funcionarios = require("./routes/func")
const setor = require("./routes/setor")
const ticket = require("./routes/ticket")

app.use(express.json())

app.use("/funcionarios", funcionarios)
app.use("/setor", setor)
app.use("/ticket", ticket)


sequelize.sync().then(()=>{
    console.log("Servidor conectado")
const port = 3333
app.listen(port, ()=>{
    console.log("Servidor aberto")
})
}).catch((err)=>{return console.log(`Erro: ${err}`)})







