import readlineSync = require("readline-sync")

const setNumeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])

for(let i = 0; i < 1; i++){
    const numero = readlineSync.questionInt("Digite o valor: ")
    if(setNumeros.has(numero)){
        console.log(`O número ${numero} foi localizado`)
    }else{
        console.log(`O número ${numero} não foi encontrado`)
    }
}