function saudacao(nome) {
    return function() {
        console.log(`Seja bem-vindo ${nome}`)
    }
    
}

const mensagem = saudacao("Leonardo")

mensagem()
