import { Stack } from "./Stack";
import leia = require("readline-sync");

const pilhaDeLivros = new Stack<string>();

let opcao: number;
let livro: string;

do {
    console.log("\n----------- MENU -----------");
    console.log("1 - Adicionar um novo livro na pilha");
    console.log("2 - Listar todos os livros da pilha");
    console.log("3 - Retirar um livro da pilha");
    console.log("0 - Finalizar programa");
    console.log("-----------------------------");

    opcao = leia.questionInt("\nDigite uma opção: ");

    switch (opcao) {
        case 1:
            console.clear();
            livro = leia.question("Digite o nome do livro: ");
            pilhaDeLivros.push(livro);
            console.log("\nLivro adicionado com sucesso!");
            pilhaDeLivros.printStack();
            break;

        case 2:
            console.clear();
            pilhaDeLivros.printStack();
            break;

        case 3:
            console.clear();
            if (pilhaDeLivros.isEmpty()) {
                console.log("\nA pilha está vazia!");
            } else {
                const retirado = pilhaDeLivros.pop();
                console.log(`\nO livro "${retirado}" foi retirado da pilha!`);
                pilhaDeLivros.printStack();
            }
            break;

        case 0:
            console.clear();
            console.log("\nPrograma finalizado!");
            break;

        default:
            console.clear();
            console.log("\nOpção inválida! Tente novamente.");
            break;
    }

} while (opcao !== 0);
