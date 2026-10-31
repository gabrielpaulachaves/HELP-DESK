const mod = require("../models/modfunc")
const { op } = require("sequelize")


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
                            }else{
                                newfun[key] = body[key]
                            }
                        }else{
                            return res.status(400).json({mensagem: "Um campo possui tipagem inválida"})
                        }
                    }

                    //verificacao do campo setor_id
                    if(key == "setor_id"){
                        const setor_id = Number(body[key])
                        if(isNaN(setor_id)){
                            return res.status(400).json({mensagem: "o ID do setor deve ser número"})
                        }else if(!setor_id){
                            return res.status(400).json({mensagem: "Setor não existe"})
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

            for (const key in body) {
                if(!colunas.includes(key)){
                    return res.status(400).json({mensagem:"Campo não existente adicionado"})
                }

                if(key == "nome" || key == "usuario" || key == "senha" || key == "funcao"){
                    if(typeof(key) == "string"){
                        if(body[key].trim() == ""){
                            return res.status(400).json({mensagem:"Campo vazio. Certifique-se de remover do formulário um campo que você não deseja atualizar"})
                        }else{
                            attfun[key] = body[key]
                        }
                    }else{
                        return res.status(400).json({mensagem:"Valores não permitidos foram adicionados"})
                    }}
                
                if(key == "setor_id"){
                    const setor_id = Number(body[key])
                    if(isNaN(setor_id)){
                        return res.status(400).json({mensagem:"Setor deve ser um número"})   
                    }else if(!setor_id){
                        return res.status(400).json({mensagem:"Setor não existe"})
                    }else{
                        attfun[key] = body[key]
                    }}           
            }
            req.attfun = attfun
            next()
           }catch(err){
            res.status(500).json({mensagem: "Erro interno"})
            console.log(err)
           }
        }
         return auth
    }
}

module.exports = validar

