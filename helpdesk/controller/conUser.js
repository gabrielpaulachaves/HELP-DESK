const express = require("express")
const mod = require("../models/modfunc")
const auth = require("../helpers/auth")

exports.cadastrar = async(req, res)=>{
    try{
        const newfun = req.newfun
        const senha = await auth(newfun.senha)

    const novofun = await mod.create({
        nome: newfun.nome,
        usuario: newfun.usuario,
        senha: senha,
        funcao: newfun.funcao,
        setor_id: newfun.setor_id
    })

    res.status(201).json(novofun)
    }catch(err){
         res.status(500).json({mensagem: "erro interno por parte da configuração"}) 
       console.log(err)
    }
}







