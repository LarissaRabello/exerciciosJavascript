// Importando a biblioteca
const leia = require("readline-sync")

// Entrada de dados
let operacao = leia.questionInt("Digite a operacao (entre 1 e 3): ")
let saldo = 1000

switch(operacao){
    case 1:
    console.log("Seu saldo é de: R$ " + saldo)
    break;

    case 2:
    if(saldo > 0){
        const saque = leia.questionFloat("Qual quantia deseja retirar? ")
        if((saldo - saque) < 0 ){
            console.log("O seu saldo é insuficiente para o valor do saque!")
        }else{
            saldo = saldo - saque
            console.log("Saque realizado com sucesso! Seu novo saldo é: R$" + saldo)
        }
    }
    break;

    case 3:
    let novoSaldo = leia.questionFloat("Qual o valor a ser depositado? R$ ")
    saldo = saldo + novoSaldo
    console.log("Seu deposito foi concluido! Seu novo saldo é de: R$" + saldo)
    break;
    default:
        console.log("Operação inválida")
        break;
}