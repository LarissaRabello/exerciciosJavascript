// Importando a biblioteca
const leia = require("readline-sync")

// Entrada de dados
let a = leia.questionInt("Por favor, digite o numero A: ")
let b = leia.questionInt("Por favor, digite o numero B: ")
let c = leia.questionInt("Por favor, digite o numero C: ")

// Processamento de dados
let soma = a + b

if(soma > c){
    console.log("A soma de A + B é maior do que C")
}else if(soma < c){
    console.log("A soma de A + B é menor que C")
}else{
    console.log("A soma de A + B é igual a C")
}