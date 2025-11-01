const leia = require("readline-sync")

let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

console.log("Índices:")
for (let i = 0; i < numeros.length; i++) {
    process.stdout.write(i + " ") 
}

console.log("\n\nVetor:")
for (let i = 0; i < numeros.length; i++) {
    process.stdout.write(numeros[i] + " ")
}

console.log("\n") 

let numeroProcurado = leia.questionInt("Digite o número que você deseja encontrar: ")

let encontrado = false

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroProcurado) {
        console.log(`\nO número ${numeroProcurado} está localizado na posição: ${i}`)
        encontrado = true
        break 
    }
}

if (!encontrado) {
    console.log(`\nO número ${numeroProcurado} não foi encontrado!`)
}
