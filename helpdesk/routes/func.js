const express = require("express")
const router = express.Router()
const mod = require("../models/modfunc")
const midle = require("../middlewares/middleUser")
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

router.post("/login", midle(["usuario", "senha"], "login"),control.login)

router.patch("/:id", midle(["nome", "senha"], "patch"), control.alterar)



module.exports = router