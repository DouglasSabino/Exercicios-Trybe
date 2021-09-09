//Exercicio 1 - Parte II
function verificaPalidromo(string) {
  if(string == string.split('').reverse().join('')){
      return true;
  }else {
      return false;
  }
}

let string = 'arara'
console.log(verificaPalidromo(string));

//Exercicio 2 - Parte II
let vetor = [5,3,25,34,2,39,9];
let maior = 0;
function retornaIndiceDoMaior(vetor) {
  for(let num of vetor) {
    if(num > maior) {
      maior = num;
    }
  }
  let indexDoMaior = vetor.indexOf(maior);
  return "O Maior numero está no index " + indexDoMaior + " vetor";
}

console.log(retornaIndiceDoMaior(vetor));

//Exercicio 3 - Parte II
vetor = [5,3,25,34,2,39,9];
let menor = vetor[0];
function retornaIndiceDoMenor(vetor) {
  for(let num of vetor) {
    if(num < menor) {
      menor = num;
    }
  }
  let indexDoMenor = vetor.indexOf(menor);
  return "O Menor numero está no index " + indexDoMenor + " vetor";
}

console.log(retornaIndiceDoMenor(vetor));

//Exercicio 4 - Parte II
let vetorNomes = ['Douglas','Diego','Ana','Fabianooo','Maria'];
let maiorNome = 'a';
function verificaMaiorNome(vetorNomes) {
  for(let nome of vetorNomes) {
    if(nome.length > maiorNome.length) {
      maiorNome = nome
    }
  }
  return "O maior nome do veotor é: " + maiorNome;
}

console.log(verificaMaiorNome(vetorNomes));