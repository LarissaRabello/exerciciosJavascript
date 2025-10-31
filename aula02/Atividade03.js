// Importando a biblioteca
const leia = require("readline-sync")

// Entrada de dados
let nome = leia.question("Por favor, digite o seu nome: ")
let idade = leia.questionInt("Por favor, digite a sua idade: ")
let doacao = leia.keyInYNStrict

// Processamento
if(idade >= 18 && idade <= 69){
    if(idade >= 60 && <= 69){
        console.log(nome + "está apto a doar sangue")
    }
    
}