const bcrypt = require("bcrypt")

function auth(senha) {
    bcrypt.genSalt(10, async(err, salt)=>{
   await bcrypt.hash(senha, salt, (err, hash)=>{
        senha = hash
    })
})
}

module.exports = auth

