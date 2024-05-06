// Exercício - 8
// Escreva um programa que receba uma operação matemática e dois operandos:

// "soma": Adicionar os dois operandos. // "subtração": Subtrair o segundo operando do primeiro. // "multiplicação": Multiplicar os dois operandos.
// "divisão": Dividir o primeiro operando pelo segundo.


const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Escolha uma das seguintes operações (+, -, *, /): ', (operation) => {
rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operation) {
        case '+':
        console.log(`The result of ${num1} + ${num2} is ${num1 + num2}`);
        break;
        case '-':
        console.log(`The result of ${num1} - ${num2} is ${num1 - num2}`);
        break;
        case '*':
          console.log(`The result of ${num1} * ${num2} is ${num1 * num2}`);
        break;
        case '/':
        if (num2!== 0) {
            console.log(`The result of ${num1} / ${num2} is ${num1 / num2}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
        default:
        console.log("Invalid operation.");
    }

    rl.close();
    });
});
});