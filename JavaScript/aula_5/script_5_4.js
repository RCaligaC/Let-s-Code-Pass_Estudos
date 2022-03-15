// PROGRAMA: Curso Digital Web & React
// EMPRESA: Let's Code

// Condicionais

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
        console.log('sinaleira com defeito!.');
}