const express = require("express")
const router = express.Router()
const mod = require("../models/modsetor")

router.get("/", async(req, res)=>{
    try{
    const setor = await mod.findAll({raw: true, order:[["idsetor", "DESC"]]})
    res.status(200).json(setor)
    }catch{
       res.status(500).json({mensagem: "erro interno"}) 
    }
})





module.exports = router