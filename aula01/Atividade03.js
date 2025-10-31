// Importando a biblioteca
const leia = require("readline-sync")

// Entrada de dados
let salarioBruto = leia.questionFloat("Por gentileza, digite o valor do salario bruto: R$ ")
let adicionalNoturno = leia.questionFloat("Por gentileza, digite o valor do adicional noturno: R$ ")
let horasExtras = leia.questionFloat("Por gentileza, digite o valor das horas extras: R$ ")
let descontos = leia.questionFloat("Por gentileza, digite o valor dos descontos: R$ ")

// Processamento
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// Saída de dados
console.log("O valor do salário líquido é de: R$ " + salarioLiquido.toFixed(2))