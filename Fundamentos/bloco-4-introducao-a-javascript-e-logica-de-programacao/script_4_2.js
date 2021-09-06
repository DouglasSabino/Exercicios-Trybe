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
soma = 0;
for(let num of numbers) {
    soma = soma + num;
}

media = soma / numbers.length
if(media > 20) {
  console.log("valor maior que 20");
}else {
  console.log("valor menor ou igual a 20");  
}

//Exercicio 5
let maior = 0;
for(let num of numbers) {
    if(num > maior){
      maior = num;
    }
}

console.log(maior);

//Exercicio 6
let contaImpar = 0;
for(let num of numbers) {
    if(num%2 != 0){
      contaImpar++;
    }
}

if(contaImpar === 0) {
    console.log("nenhum valor impar");
}else{
    console.log("Existem " + contaImpar + " numeros impares no array");
}

//Exercicio 7
let menor = numbers[0];
for(let num of numbers) {
    if(num < menor){
      menor = num;
    }
}

console.log(menor);

//Exercicio 8
let novoVetor = [];

for(let i = 0; i < 25; i++) {
    novoVetor[i] = i+1;
}

console.log(novoVetor);

//Exercicio 9
for(let num of novoVetor) {
  console.log(num/2);
}

//Bonus 1
let aux;
for(let i = 1; i < numbers.length; i++) {
  for(let x = 0; x < numbers.length; x++) {
    if(numbers[i] < numbers[x]){
      aux = numbers[i];
      numbers[i] = numbers[x];
      numbers[x] = aux;
    }
  }
}

console.log(numbers);

//Bonus 2
aux = 0;
for(let i = 1; i < numbers.length; i++) {
  for(let x = 0; x < numbers.length; x++) {
    if(numbers[i] > numbers[x]){
      aux = numbers[i];
      numbers[i] = numbers[x];
      numbers[x] = aux;
    }
  }
}

console.log(numbers);

//Bonus 3
let arrayMultiplicado = [];

for(let i = 0; i < numbers.length; i++){
    arrayMultiplicado.push(numbers[i]*numbers[i+1]);
}

console.log(arrayMultiplicado);