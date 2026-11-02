const midle = require("../middlewares/middleuser")
const bcrypt = require("bcrypt")

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(midle.senha, salt, (err, hash)=>{
        midle.senha = hash
    })
})

