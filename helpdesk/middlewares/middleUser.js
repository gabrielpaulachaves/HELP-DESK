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
                            }else{
                                newfun[key] = body[key]
                            }
                        }else{
                            return res.status(400).json({mensagem: "Um campo possui tipagem inválida"})
                        }
                    }

                    //verificacao do campo setor_id
                    if(key == "setor_id"){
                        if(!(typeof(body[key] == "number"))){
                            return res.status(400).json({mensagem: "Tipagem de setor inválido"})
                        }
                        
                    }

                }
            
            }catch{

            }
        }
    }



}


module.exports = validar

