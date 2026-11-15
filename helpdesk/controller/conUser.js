const express = require("express")
const mod = require("../models/modfunc")
const {auth} = require("../helpers/Auth")

const cadastrar = async(req, res)=>{
    try{
        const newfun = await req.newfun
        const senha = await auth.authc(newfun.senha)

        
    const novofun = await mod.create({
        nome: newfun.nome,
        usuario: newfun.usuario,
        senha: senha,
        funcao: newfun.funcao,
        setor_id: newfun.setor_id
    })
    
    res.status(201).json({nome: novofun.nome, senha: novofun.usuario})
    }catch(err){
         res.status(500).json({mensagem: "erro interno por parte da configuração"}) 
       console.log(err)
    }
}

const login = async(req, res)=>{
    try{
        const trylogin = req.body
        
        const buscandonobanco = await mod.findAll({
            where: {
                usuario: trylogin.usuario               
            }
            
        }) 
        if(buscandonobanco.usuario == null){
            return res.status(401).json({mensagem:"não encontrado"})
        }

        const autenticado = await auth.comparar(buscandonobanco.senha)

        if(autenticado){
            return res.status(200).json({mensagem:"usuario autenticado"})
        }
        
    }catch(err){
         res.status(500).json({mensagem: "erro interno"}) 
       console.log(err)
    }
}



module.exports = {
    cadastrar, login
}