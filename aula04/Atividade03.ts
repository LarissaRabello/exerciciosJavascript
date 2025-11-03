import readlineSync = require("readline-sync")

// Cria o set
const setNumeros: Set<number> = new Set<number>([])

// Lê 10 números digitados pelo usuário
for (let i = 0; i < 10; i++) {
    const numeros = readlineSync.questionInt(`Digite o ${i + 1}ª número: `)
    // Toda vez que o usuário digitar um número, ele faz um add dentro do set para armazenar esses dados
    setNumeros.add(numeros)
}

console.log("\nTodas os números cadastrados:")
setNumeros.forEach(numeros => console.log(numeros))