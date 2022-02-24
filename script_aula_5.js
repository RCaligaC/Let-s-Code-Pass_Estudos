// PROGRAMA: Curso Digital Web & React
// EMPRESA: Let's Code

// Condicionais

// Exemplo if e else:

let estaSol = false
if (estaSol) {
    console.log('Vou a praia!');
}
else {
    console.log('Vou ao campo!');
}

// Utilizando o else if
let numero = -1
if (numero > 0) {
    console.log('Número positivo!')
}
else if (numero == 0) {
    console.log('O número é zero!')
}
else {
    console.log('Número negativo!')
}

// O número é par ou impar (vamos colocar esta mesma condição usando o Operador Tenário)

let num = 5
if (num % 2 == 0) {
    console.log('O número é PAR!')
}
else {
    console.log('O número é IMPAR!')
}

// Operador Tenário

let par_impar = num % 2 == 0 ? 'Par' : 'Impar';
console.log(par_impar)


/* Switch
O Switch é uma estrutura condicional que recebe um valor e executa um código quebrando os casos que a variável pode receber. Por exemplo:*/

let sinaleira = 'amarelo';

switch (sinaleira) {
    case 'verde':
        console.log('pode passar!');
        break
    case 'amarelo':
        console.log('atenção!');
        break
    case 'vermelho':
        console.log('pare!');
        break
    default:
        console.log('sinaleira com defeito!.')
}