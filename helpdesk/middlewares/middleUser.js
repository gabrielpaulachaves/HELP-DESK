const { Op } = require("sequelize")
const mod = require("../models/modfunc")


function validar(valor, http){
    const colunas = valor

    if(http == "post"){
        async function auth(req, res, next) {
            const body = req.body
                const newfun = {}
            try{

                if(!("nome" in body) || !("usuario" in body) || !("senha" in body) || !("funcao" in body) || !("setor_id" in body)){
                    return res.status(400).json({mensagem: "Há um campo em falta"})
                }
                        //para cada propriedade no objeto body
                for(const key in body){
                    
                    if(!colunas.includes(key)){
                        return res.status(400).json({mensagem: "um campo não permitido foi adicionado"})
                    }

                    //verificacao dos campos strings
                    if(key == "nome" || key == "usuario" || key == "senha" || key == "funcao"){
                        if(typeof(body[key]) == "string"){
                            if(body[key].trim() == ""){
                                return res.status(400).json({mensagem: "Há um campo vazio"})
                            }
                            if(key == "usuario"){
                                if(body[key].length < 12 ||  body[key].length > 30){
                                    return res.status(400).json({mensagem: "Só é permitido o mínimo de 12 caracteres e o máximo de 30 caracteres"})
                                }  
                            }else if(key == "senha"){
                                if(body[key].length < 8 ||  body[key].length > 20){
                                    return res.status(400).json({mensagem: "Só é permitido o mínimo de 8 caracteres e o máximo de 12 caracteres"})
                                } 
                            }else{
                                    newfun[key] = body[key]
                                }
                        }else{
                            return res.status(400).json({mensagem: "Um campo possui tipagem inválida"})
                        }
                    }

                    //verificacao do campo setor_id
                    if(key == "setor_id"){
                        if(typeof(body[key]) == "object" ||typeof(body[key]) == "boolean"){
                         return res.status(400).json({mensagem: "Tipagem de setor inválida"})
                        }

                        const setor_id = Number(body[key])
                        if(isNaN(setor_id)){
                            return res.status(400).json({mensagem: "o ID do setor deve ser número"})
                        }else if(!setor_id){
                            return res.status(400).json({mensagem: "Setor não existe"})
                        }else if(!Number.isInteger(setor_id)){
                            return res.status(400).json({mensagem: "ID do setor deve ser inteiro"})
                        }else{
                               newfun[key] = body[key]  
                        }
                    }                   
                }
                req.newfun = newfun
                next()
            }catch(err){
                res.status(500).json({mensagem: "Erro interno"})
            console.log(err)
            }
        }
        return auth
    }
        
    if(http == "patch"){
        async function auth(req, res, next) {
            const body = req.body
            const attfun = {}
           try{
            if(!mod.findOne({where: {idfuncionario: req.params.id}})){
               return res.status(400).json({mensagem: "Funcionário não existe"})
            }

            for (const key in body) {
                if(!colunas.includes(key)){
                    return res.status(400).json({mensagem:"Campo não existente adicionado"})
                }

                if(key == "nome" || key == "usuario" || key == "senha" || key == "funcao"){
                    if(typeof(body[key]) == "string"){
                        if(body[key].trim() == ""){
                            return res.status(400).json({mensagem:"Campo vazio. Certifique-se de remover do formulário um campo que você não deseja atualizar"})
                        }
                        if(key == "usuario"){
                                if(body[key].length < 12 ||  body[key].length > 30){
                                    return res.status(400).json({mensagem: "Só é permitido o mínimo de 12 caracteres e o máximo de 30 caracteres"})
                                }  
                            }else if(key == "senha"){
                                if(body[key].length < 8 ||  body[key].length > 20){
                                    return res.status(400).json({mensagem: "Só é permitido o mínimo de 8 caracteres e o máximo de 12 caracteres"})
                                } 
                            }else{
                                    newfun[key] = body[key]
                                }
                    }else{
                        return res.status(400).json({mensagem:"Valores não permitidos foram adicionados"})
                    }}
                
               if(key == "setor_id"){
                        if(typeof(body[key]) == "object" ||typeof(body[key]) == "boolean"){
                         return res.status(400).json({mensagem: "Tipagem de setor inválida"})
                        }
                        const setor_id = Number(body[key])
                        if(isNaN(setor_id)){
                            return res.status(400).json({mensagem: "o ID do setor deve ser número"})
                        }else if(!setor_id){
                            return res.status(400).json({mensagem: "Setor não existe"})
                        }else if(!Number.isInteger(setor_id)){
                            return res.status(400).json({mensagem: "ID do setor deve ser inteiro"})
                        }else{
                            attfun[key] = body[key]       
                        }
                    }              
            }
            req.attfun = attfun
            next()
           }catch(err){
            res.status(500).json({mensagem: "Erro interno"})
            console.log(err)
           }
        }
         return auth
    }else{
       throw new Error("HTTP indefinido");
       
    }
}

module.exports = validar

