const bcrypt = require("bcrypt")

const saltRounds = 10

async function auth(senha) {
   const bhash = await bcrypt.hash(senha, saltRounds, (err, hash)=>{
    })    
    return bhash
}

module.exports = auth
