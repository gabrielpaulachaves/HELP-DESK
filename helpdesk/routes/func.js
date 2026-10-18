const express = require("express")
const router = express.Router()
const mod = require("../models/modfunc")



router.get("/", async(req, res)=>{
    try{
      const func = await mod.findAll({raw: true, order:[["idfuncionario", "DESC"]]})
      res.status(200).json(func)
    }catch{
       res.status(500).json({mensagem: "erro interno"}) 
    }
})

router.post("/", midle(["nome","usuario", "senha", "funcao", "setor_id"] ,"post"),async(req, res)=>{
       try{
        const newfun = req.body
    const novofun = await mod.create(newfun)
    res.status(201).json(novofun)
    }catch{
       res.status(500).json({mensagem: "erro interno"}) 
    }
})



module.exports = router