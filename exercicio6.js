//Exercício 6
// Dada a idade e o tipo de ingresso de uma pessoa, determine se ela pode assistir a um filme com classificação etária. A pessoa pode assistir ao filme se:

// Tiver 18 anos ou mais, ou // Tiver 16 ou 17 anos e possuir um ingresso do tipo "Meia".

function Verificacao(idade, TipoIngresso) {
    if (idade >= 18) {
        return true;
    } else if (idade >= 16 && TipoIngresso === 'Meia') {
        return true;
    } else {
        return false;
    }
}
console.log(Verificacao(19, 'Inteira'));
console.log(Verificacao(17, 'Meia'));
console.log(Verificacao(15, 'Inteira'));
console.log(Verificacao(16, 'Inteira'));