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
  return "O maior nome do vetor é: " + maiorNome;
}

console.log(verificaMaiorNome(vetorNomes));

//Exercicio 5 - Parte II
let vetorTeste = [2, 3, 2, 5, 8, 2, 3];
let vetorTransisao = [];
let vetorRepetido = [];
function maisRepetido(vetorTeste) {
  for(let i = 0; i < vetorTeste.length; i++) {
    for(let x = 0; x < vetorTeste.length; x++) {
      if(vetorTeste[i] == vetorTeste[x]) {
       vetorTransisao.push(vetorTeste[i]);
      }
    }
    if(vetorTransisao.length > vetorRepetido.length) {
      vetorRepetido = vetorTransisao;
    }
    vetorTransisao = [];
  }
  return "O Numero mais rapetido é: " + vetorRepetido[0];
}

console.log(maisRepetido(vetorTeste));

//Exercicio 6 - Parte II
let n = 5;
let soma = 0
function somaAteN(n) {
  let vetor = [];
  while(n > 0) {
   vetor.push(n);
   n--;
  }

  for(let num of vetor) {
    soma += num;
  }
  return "A soma do vetor é: " + soma;
}

console.log(somaAteN(n));

//Exercicio 7 - Parte II
let word = 'trybe', ending = 'be'
function verificaFinalPalavra(word,ending) {
  return word.endsWith('be');
}

console.log(verificaFinalPalavra(word,ending));