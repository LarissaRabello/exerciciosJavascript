// Importando a biblioteca
const leia = require('readline-sync')

// Entrada de dados
let nota1 = leia.questionFloat("Por gentileza, digite a primeira nota: ")
let nota2 = leia.questionFloat("Por gentileza, digite a segunda nota: ")
let nota3 = leia.questionFloat("Por gentileza, digite a terceira nota: ")
let nota4 = leia.questionFloat("Por gentileza, digite a quarta nota: ")

// Processamento
let mediafinal = (nota1 + nota2 + nota3 + nota4) / 4

// Saída de dados
console.log("A média final é: " + mediafinal.toFixed(1))