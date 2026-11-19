const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { login } = require("../controller/conUser")
const user = login.buscandonobanco
const senha = login.autenticado
const usu = {usuario: user, senha: senha}
const option = {expiresIn: "15ms"}
//const token = jwt.sign({foo: "bar"}, process.env.SECRET, {algorithm: "RS256"}, function(err, token){console.log(token)})
token = jwt.sign(usu, process.env.SECRET, option)

const saltRounds = 10

async function authc(senha) {
   const bhash = await bcrypt.hash(senha, saltRounds)  
     
    return bhash
}

async function comparar(senha, hash) {
   const comparando = await bcrypt.compare(senha, hash)     

   return comparando
}

module.exports = {authc, comparar}

//token: Texto entregue no login, é separado por cabeçalho.payload.assinatura (cabeçalho = algoritimo, payload = dados inseridos, como o usuario dono daquele token e quando expira. A assinatura é uma conta feita encima do cabeçalho e payload). cabeçalho + payload = conteudo
//como assinatura é feita = funcao de hash aplicada sobre o conteudo + senha secreta, isso se da a assinatura. A assinatura é calculada sempre a partir do payload antigo, se o payload é alterado, a assinatura NAO muda. Para poder passar com o payload adulterado, ele precisará da senha secreta (o segredo) para calcular uma assinatura nova
//como o servidor confere um token = servidor refaz a conta com o mesmo segredo(senha secreta) e compara com a assinatura que veio no token, se for igual = conteudo nao foi adulterado
//normalmente um atacante quer mudar o payload, porem quando é adulterado, a assinatura tbm muda


//sessao: guardar um estado, isso é guardar aquele login do momento. Quando é feito um login, é criado um registro/codigo, e esse codigo é guardado num cookie. Esse codigo representa aquela sessao (aquele usuario). Quando é feito uma nova requisiçao, o codigo é dado pelo navegador para iniciar aquela sessao. Cookies nao devem ser passados para ninguem, pois é possivel acessar sessoes de usuarios sem nem saber a senha