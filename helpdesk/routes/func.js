const express = require("express")
const router = express.Router()
const mod = require("../models/modfunc")


router.get("/", async(req, res)=>{
        
})

router.post("/", async(req, res)=>{
       try{
        const newfun = "validacao"
    const novofun = await mod.create(newfun)
    res.status(201).json(novofun)
    }catch{
       res.status(500).json({mensagem: "erro interno"}) 
    }
})



module.exports = router