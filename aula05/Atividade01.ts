import { Queue } from "./Queue"
import leia = require("readline-sync")

const filaDeClientes = new Queue<string>()

let opcao: number

do {
    console.log("\n-------------- Menu --------------")
    console.log("1 - Adicionar um cliente na fila")
    console.log("2 - Listar todos os clientes da fila")
    console.log("3 - Chamar (retirar) um cliente da fila")
    console.log("0 - Finalizar programa")

    opcao = leia.questionInt("\nEntre com a opção desejada: ")

    switch (opcao) {
        case 1:
            console.clear()
            const cliente = leia.question("Digite o nome do cliente: ")
            filaDeClientes.enqueue(cliente)
            console.log("\nCliente adicionado à fila!\n")
            break

        case 2:
            console.clear()
            filaDeClientes.printQueue()
            break

        case 3:
            console.clear()
            if (filaDeClientes.isEmpty()) {
                console.log("\nA fila está vazia!\n")
            } else {
                const clienteChamado = filaDeClientes.dequeue()
                console.log(`\nO cliente ${clienteChamado} foi chamado!\n`)
            }
            break

        case 0:
            console.clear()
            console.log("\nPrograma finalizado!\n")
            break

        default:
            console.log("\nOpção inválida! Tente novamente.\n")
    }

} while (opcao !== 0)