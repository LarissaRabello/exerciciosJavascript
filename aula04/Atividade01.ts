import readlineSync = require("readline-sync")

// Cria o array vazio
const listaDeCores: string[] = []

// Lê 5 cores do usuário
for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `)
    // Toda vez que o usuário digitar uma cor, ele faz um push dentro do array para armazenar esses dados
    listaDeCores.push(cor)
}

// Exibe todas as cores cadastradas
console.log("\nTodas as cores cadastradas:")
listaDeCores.forEach(cor => console.log(cor))

// Exibe as cores em ordem crescente (alfabética)
console.log("\nCores em ordem crescente:")
listaDeCores.sort().forEach(cor => console.log(cor))
