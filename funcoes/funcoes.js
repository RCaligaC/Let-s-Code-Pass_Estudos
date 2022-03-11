// Criando uma simples função
function escreva(){
    alert('Olá, minha primeira função.');
}

escreva();

function somar(){
    a = Number(prompt('Digite um número: '));
    b = Number(prompt('Digite outro número: '));
    alert(a + b);
}

somar();

//criando uma função com parâmetros

function mult(a,b){
    alert(a * b);
}

mult(5,11);

function sub(a,b){
    return a - b
}

alert(sub(11,5));


// outras fomas de declarar
// usando função

function soma1(a,b) {return a+b};

// atribuindo uma função anônima em constantes

const soma2 = function(a,b) {return a+b};

// atribuindo uma função de "flexa" em constantes

const soma3 = (a,b) => a+b

// exemplos de funções de flexa

const hello1 = () => "hello";
const hello2 = (name) => "hello" + name;
const hello3 = (name) => {return "hello" + name};