import readlineSync = require("readline-sync")

// Cria o array inicializado
const valores: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6)

for(let i = 0; i < 1; i++){
    const valor = readlineSync.questionInt("Digite o valor: ")
    if(valores.includes(valor)){
        console.log(`O número ${valor} está localizado na posição: ${valores.indexOf(valor)}`)
    }else{
        console.log(`O número " + valor + " não foi encontrado`)
    }
}