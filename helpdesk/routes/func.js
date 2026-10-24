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
                    // a ordem é: entra na URL ("/"), passa pelo middleware (nossa verificacao) e depois continua aqui com o try com um objeto criado no middleware com os dados validados
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