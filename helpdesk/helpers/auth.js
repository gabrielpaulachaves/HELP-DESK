const bcrypt = require("bcrypt")

const saltRounds = 10

async function auth(senha) {
   const bhash = await bcrypt.hash(senha, saltRounds)  
     
    return bhash
}

async function comparar(usuario, senha) {
   const comparando = await bcrypt.compare(senha, senha)     
}

module.exports = {auth, comparar}
