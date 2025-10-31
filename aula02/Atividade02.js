// Importando a biblioteca
const leia = require("readline-sync")

// Entrada de dados
let a = leia.questionInt("Por favor, digite um numero: ")
/* let b = leia.questionInt("Por favor, digite o segundo numero: ")
let c = leia.questionInt("Por favor, digite o terceiro numero: ")
let d = leia.questionInt("Por favor, digite o quarto numero: ") */

// Processamento de dados
if(a %2 == 0){
    if(a > 0){
        console.log("O número é par e positivo")
    }else{
        console.log("O número é par e negativo")
    }    
}else{
    if(a %2 == 1){
        console.log("O número é ímpar e positivo")
    }else{
        console.log("O número é ímpar e negativo")
    }
}