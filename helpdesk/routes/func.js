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
                    // a ordem é: entra na URL ("/"), passa pelo middleware (nossa verificacao) e depois continua aqui com o try com um objeto criado no middleware com os dados validados
router.post("/", midle(["nome","usuario", "senha", "funcao", "setor_id"] ,"post"),async(req, res)=>{
       try{
        const newfun = req.newfun
        

    const novofun = await mod.create(newfun)
    res.status(201).json(novofun)
    }catch{
       res.status(500).json({mensagem: "erro interno"}) 
    }
})

router.patch("/:id", midle(["nome","usuario", "senha", "funcao", "setor_id"], "patch"), async(req, res)=>{
    try{
        

    }catch{
        res.status(500).json({mensagem: "erro interno"}) 
    }
})



module.exports = router