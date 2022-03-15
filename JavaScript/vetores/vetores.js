// Criando um vetor

let vetor = [];

for (let i = 0; i < 10; i++){
    vetor.push(i);   
}
alert(vetor);


// Percorrendo um vetor

for (let i = 0; i < vetor.length; i++){
    alert(vetor[i])
}

for (let i of vetor){
    alert(i)
}

for (let indice in vetor){
    alert(vetor[indice])
}


alert(vetor)

// Percorrendo e alterando os valores de cada item do vetor

for (let i = 0; i < vetor.length; i++){
    vetor[i] = (i * 10);
}

alert(vetor);

