//Exercício 7
// Escreva um programa que receba um número inteiro representando a operação a ser realizada:

// 1: Adicionar um elemento no final do array. // 2: Remover o último elemento do array. // 3: Remover o primeiro elemento do array.
// 4: Exibir todos os elementos do array. // 0: Sair do programa.

const readline = require('readline');

const elements = [];

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function askOperation() {
rl.question('Escolha uma Operação (1 - Adicionar Elemento, 2 - Remover Último Elemento, 3 - Remover Primeiro Elemento, 4 - Exibir Elementos, 0 - Sair): ', (operation) => {
    const operationNumber = parseInt(operation);
    if (isNaN(operationNumber) || operationNumber < 0 || operationNumber > 4) {
    console.log("Invalid operation. Please try again.");
    askOperation();
    } else {
    processOperation(operationNumber);
    }
});
}

function processOperation(operation) {
switch (operation) {
    case 1:
    askElementToAdd();
    break;
    case 2:
    if (elements.length > 0) {
        elements.pop();
    } else {
        console.log("Array está vazio!");
    }
    askOperation();
    break;
    case 3:
    if (elements.length > 0) {
        elements.shift();
    } else {
        console.log("Array está vazio!");
    }
    askOperation();
    break;
    case 4:
    console.log("Elementos do Array: ", elements);
    askOperation();
    break;
    case 0:
    console.log("Programa Finalizado");
    rl.close();
    process.exit(0);
}
}

function askElementToAdd() {
rl.question('Enter element to add: ', (element) => {
    if (element!== "") {
    elements.push(element);
    askOperation();
    } else {
    console.log("Element cannot be empty.");
    askElementToAdd();
    }
});
}

askOperation();