// Importando a biblioteca
const leia = require("readline-sync")

// Processamento de dados
let numero1 = leia.questionInt("Digite o primeiro numero: ")
let numero2 = leia.questionInt("Digite o segundo numero: ")
let operacao = leia.questionInt("Digite o numero da operacao:\n1 - Soma\n2 - Subtracao\n3 - Multiplicacao\n4 - Divisao\n")

let total

switch(operacao){
    case 1:
    total = numero1 + numero2;
    break;

    case 2:
    total = numero1 - numero2;
    break;

    case 3:
    total = numero1 * numero2;
    break;

    case 4:
    total = numero1 / numero2;
    break;
    default:
        total = "Operação inválida";
}

console.log("O case " + operacao + " e " + total)