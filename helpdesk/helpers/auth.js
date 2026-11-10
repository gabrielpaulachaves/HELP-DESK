const bcrypt = require("bcrypt")


async function auth(senha) {
    const saltRounds = 10
   const bc = await bcrypt.genSalt(saltRounds, async(err, salt)=>{
   await bcrypt.hash(senha, salt, (err, hash)=>{
       return senha = hash
    })
})
}

module.exports = auth

