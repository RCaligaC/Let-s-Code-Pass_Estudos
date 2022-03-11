// Em resumo, uma função de alta ordem é uma função que recebe ou retorna uma função.

//No código vamos declarar três funções, somar e subtrair com dois parâmetros e 
// aplicarOperacao com três parâmetros.

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a, b);

const resultado1 = aplicarOperacao(2, 2, somar);
const resultado2 = aplicarOperacao(4, 2, subtrair);

// document.write(resultado1, "<br/>");
// document.write(resultado2, "<br/>");

// Retornando função:

const somax = (x) => (y) => x + y;

const soma1 = somax(8);
const soma2 = somax(8);
const soma3 = somax(8);

/*document.write(soma1(1), "<br/>");
document.write(soma2(1), "<br/>");
document.write(soma3(1));*/
console.log(soma1(1));
console.log(soma2(1));
console.log(soma3(1));