let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
for(let num of numbers) {
    console.log(num);
}

//Exercicio 2
let soma = 0;
for(let num of numbers) {
    soma = soma + num;
}
console.log(soma);

//Exercicio 3
soma = 0;
for(let num of numbers) {
    soma = soma + num;
}

let media = soma / numbers.length
console.log(media);

//Exercicio 4
