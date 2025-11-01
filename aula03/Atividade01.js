const leia = require("readline-sync")

let numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
let numero2 = leia.questionInt("Digite o segundo numero do intervalo: ")
let inicio
    
if(numero1 < numero2){
        console.log("No intervalo entre: " + numero1 + " e " + numero2)
        for(inicio = numero1; inicio <= numero2; inicio++){
        if(inicio %3 == 0 && inicio %5 == 0){
            console.log(inicio + " é múltiplo de 3 e 5")
        }
    }
}else{
    console.log("Intervalo inválido")
}