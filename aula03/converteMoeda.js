const prompt = require("prompt-sync")()

function moedaConvertida (n1) {
    return function() {
        console.log(n1 * 4.80)
    }
} 

const moeda = moedaConvertida(10)

moeda()

function converteMoeda(valor, taxa){
    return valor * taxa
}

let valorEmDolar = Number(prompt("Digite o valor em dólar: "))
let taxaConversao = 4.80

let resultado = converteMoeda(valorEmDolar, taxaConversao)

console.log(`O valor $${valorEmDolar} convertido para reais é R$ ${resultado.toFixed(2)}`)