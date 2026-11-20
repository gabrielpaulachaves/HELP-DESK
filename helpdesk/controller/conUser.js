const express = require("express")
const mod = require("../models/modfunc")
const {authc, comparar, tjwt} = require("../helpers/Auth")

const cadastrar = async(req, res)=>{
    try{
        const newfun = await req.newfun
        const senha = await authc(newfun.senha)

        
    const novofun = await mod.create({
        nome: newfun.nome,
        usuario: newfun.usuario,
        senha: senha,
        funcao: newfun.funcao,
        setor_id: newfun.setor_id
    })
    
    res.status(201).json({id: novofun.idfuncionario, usuario: novofun.usuario})
    }catch(err){
         res.status(500).json({mensagem: "erro interno por parte da configuração"}) 
       console.log(err)
    }
}

const login = async(req, res)=>{
    try{
        const trylogin = req.body
        
        const buscandonobanco = await mod.findOne({
            where: {
                usuario: trylogin.usuario               
            }                      
        }) 

        if(!buscandonobanco){
            return res.status(401).json({mensagem:"usuario ou senha errado"})
        }else{
            const autenticado = await comparar(trylogin.senha ,buscandonobanco.senha)

        if(autenticado == false){
            return res.status(401).json({mensagem:"usuario ou senha errado"})
        }else{
            const jwt = await tjwt(buscandonobanco.idfuncionario)
            return res.status(200).json({mensagem:"Autenticado com sucesso"}, jwt)       
        }
        }
        
  
    }catch(err){
         res.status(500).json({mensagem: "erro interno por parte da configuração"}) 
       console.log(err)
    }
}



module.exports = {
    cadastrar, login
}
