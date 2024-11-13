const animais = [
    { tipo: "gato", idade: 2 },
    { tipo: "cão", idade: 4 },
    { tipo: "gato", idade: 3 },
    { tipo: "cão", idade: 1 },
];

const idadeReal = animais.map((animalAtual) => {
    if (animalAtual.idade >= 1 && animalAtual.tipo === "cão") {
        console.log(`A idade do cão é ${animalAtual.idade * 7}`)
    } else if (animalAtual.idade > 1 && animalAtual.tipo === "gato"){
        console.log(`A idade do gato é ${animalAtual.idade * 15}`)
    } else {
        console.log("Animal não localizado.")
    }
})

console.log(idadeReal)