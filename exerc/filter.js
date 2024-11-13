const numeros = [10, 3, 5, 8, 2];

const numerosPares = numeros.filter((numeroAtual, indice, arrayTotal) => {
    return numeroAtual % 2 == 0 // True or false
})

console.log(numerosPares)

const pessoas = [
    {
        nome: 'João',
        idade: 70,
    },
    {
        nome: 'Leonardo',
        idade: 18,
    },
    {
        nome: 'Nadia',
        idade: 14,
    },
    {
        nome: 'Tiago',
        idade: 22,
    },
]

const pessoasVotantes = pessoas.filter((pessoaAtual) => {
    return !(pessoaAtual.idade < 16 || pessoaAtual.idade > 70);
})

console.log(pessoasVotantes)
console.log(pessoas)

// ------ Array base
const despesas = [
    { nome: "Aluguel", valor: 1200 },
    { nome: "Mercado", valor: 450 },
    { nome: "Internet", valor: 100 },
    { nome: "Restaurante", valor: 200 },
    { nome: "Transporte", valor: 150 },
    { nome: "Cinema", valor: 50 },
    { nome: "Academia", valor: 90 }
];


  // ---- Resultado final
    const despesasAltas = 
    filtrarDespesasAltas(despesas, 100);
    console.log(despesasAltas);
  // Saída esperada: [
  //   { nome: "Aluguel", valor: 1200 },
  //   { nome: "Mercado", valor: 450 },
  //   { nome: "Restaurante", valor: 200 },
  //   { nome: "Transporte", valor: 150 }
  // ]