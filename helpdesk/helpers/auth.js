const bcrypt = require("bcrypt")

const saltRounds = 10

async function authc(senha) {
   const bhash = await bcrypt.hash(senha, saltRounds)  
     
    return bhash
}

async function comparar(senha) {
   const comparando = await bcrypt.compare(senha)     

   return comparando
}

module.exports = {authc, comparar}
