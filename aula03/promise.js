console.log("Linha 1")

function esperar3segundos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Os 3 segundos acabaram!")
            console.log("Linha 2")
        }, 3000 );
    })
};

console.log("Linha 3")

esperar3segundos()
