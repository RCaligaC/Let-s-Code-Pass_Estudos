// criando uma matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

num = []

for (let linha of matriz){
    for(let elemento of linha){
        num.push(elemento,"\n");
    }
}
alert(num);
