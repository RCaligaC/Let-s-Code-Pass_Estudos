/*const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let ident;

readLine.question('Qual o seu nome? ', input => {
    ident = input;
    console.log(ident);

});*/

let hoje = new Date().getDay();
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
    dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}
console.log(hoje);
console.log(dia);
