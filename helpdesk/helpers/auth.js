const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const saltRounds = 10

async function authc(senha) {
   const bhash = await bcrypt.hash(senha, saltRounds)  
     
    return bhash
}

async function comparar(senha, hash) {
   const comparando = await bcrypt.compare(senha, hash)     

   return comparando
}
async function tjwt(usu){
   const token = jwt.sign({usu}, process.env.SECRET, {expiresIn: process.env.EXPIRES})
   console.log(token)
   return token
}

module.exports = {authc, comparar, tjwt}

//token: Texto entregue no login, é separado por cabeçalho.payload.assinatura (cabeçalho = algoritimo, payload = dados inseridos, como o usuario dono daquele token e quando expira. A assinatura é uma conta feita encima do cabeçalho e payload). cabeçalho + payload = conteudo
//como assinatura é feita = funcao de hash aplicada sobre o conteudo + senha secreta, isso se da a assinatura. A assinatura é calculada sempre a partir do payload antigo, se o payload é alterado, a assinatura NAO muda. Para poder passar com o payload adulterado, ele precisará da senha secreta (o segredo) para calcular uma assinatura nova
//como o servidor confere um token = servidor refaz a conta com o mesmo segredo(senha secreta) e compara com a assinatura que veio no token, se for igual = conteudo nao foi adulterado
//normalmente um atacante quer mudar o payload, porem quando é adulterado, uma assinatura diferente é gerada, o que nao bate com a assinatura "antiga"
//quem cria as assinaturas é o servidor, pois só ele tem a secret. 


/*cabeca+payload + secret = assinatura
*token criado* token.assinatura 
no token tem o cabeçalho e o payload, ou seja (cabeçalho, payload).assinatura
servidor pega esse (cabeçalho, payload) soma com secret e ve se essa conta é = assinatura que veio no final do token.

imagine que a secret é "abc", e eu (hacker) sei disso, eu lanço um payload adulterado (senha qualquer mas com usuario de TI) e somo com essa secret, e ai crio uma assinatura. Porem no token, esse payload e cabecalho vao no token, ai chego la na requisicao, o servidor pega o cabecalho e o payload e faz a conta com o abc e viu que deu certin. É assim entao ne?

1 - secret
2 - a versao que veio no token. Nao bate pq como o payload mudou, o conteudo tbm mudou, e a soma com o secret vai ser diferente da assinatura que veio.*/


//sessao: guardar um estado, isso é guardar aquele login do momento. Quando é feito um login, é criado um registro/codigo, e esse codigo é guardado num cookie. Esse codigo representa aquela sessao (aquele usuario). Quando é feito uma nova requisiçao, o codigo é dado pelo navegador para iniciar aquela sessao. Cookies nao devem ser passados para ninguem, pois é possivel acessar sessoes de usuarios sem nem saber a senha