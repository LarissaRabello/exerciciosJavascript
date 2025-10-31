// Importando a biblioteca
const leia = require("readline-sync")

// Entrada de dados
let salario = leia.questionFloat("Por gentileza, digite o salario: R$ ")
let abono = leia.questionFloat("Por gentileza, digite o abono: R$ ")

// Processamento de dados
let novoSalario = salario + abono

// Saída de dados
console.log("O novo salário com o valor do abono é de: R$ " + novoSalario.toFixed(2))