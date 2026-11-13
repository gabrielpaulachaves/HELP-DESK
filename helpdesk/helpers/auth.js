const bcrypt = require("bcrypt")

const saltRounds = 10

function auth(senha) {
   bcrypt.genSalt(saltRounds, (err, salt)=>{
        bcrypt.hash(senha, salt, (hash)=>{
       return senha = hash
    })
})
    
}
return auth
module.exports = auth
