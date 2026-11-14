const express = require("express")
const router = express.Router()
const mod = require("../models/modfunc")
const midle = require("../middlewares/middleuser")
const control = require("../controller/conUser")



router.get("/", async(req, res)=>{
    try{
        req.body
      const func = await mod.findAll({raw: true, order:[["idfuncionario", "DESC"]]})
      res.status(200).json(func)
    }catch{
       res.status(500).json({mensagem: "erro interno"}) 
    }
})
                    
router.post("/", midle(["nome","usuario", "senha", "funcao", "setor_id"] ,"post"), control.cadastrar)

router.patch("/:id", midle(["nome","usuario", "senha", "funcao", "setor_id"], "patch"), async(req, res)=>{
    try{
        

    }catch{
        res.status(500).json({mensagem: "erro interno"}) 
    }
})



module.exports = router