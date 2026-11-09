const bcrypt = require("bcrypt")


async function auth(senha) {
    
   const bc = await bcrypt.genSalt(10, async(err, salt)=>{
   await bcrypt.hash(senha, salt, (err, hash)=>{
       return senha = hash
    })
})
}

module.exports = auth

