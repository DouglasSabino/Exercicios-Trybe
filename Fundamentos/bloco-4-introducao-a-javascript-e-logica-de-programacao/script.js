//Exercicio 1
const a = 45, b = 45, c = 90;

function adicao(a,b) {
  return a+b;
}

function subtracao(a,b) {
  return a-b;
}

function multiplicacao(a,b) {
  return a*b;
}

function divisao(a,b) {
  return a/b;
}

function modulo(a,b) {
  return a%b;
}

console.log(adicao(a,b));
console.log(subtracao(a,b));
console.log(multiplicacao(a,b));
console.log(divisao(a,b));
console.log(modulo(a,b));

//Exercicio 2
function comparaMaior(a,b) {
  if(a > b) {
    return "a contante A é maior"
  }
    return "a contante B é maior"    
}

console.log(comparaMaior(a,b));

//Exercicio 3
function comparaMaiorDeTres(a,b,c) {
  let maior = 0;
  let aux = 0;
  let vetor = [a,b,c];

  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] > maior) {
      maior = vetor[i];
    }
  }
  return maior;
}

console.log(comparaMaiorDeTres(a,b,c));

//Exercicio 4
function positivoOuNegativo(a) {
  if(a > 0) {
    return "positive";
  }else if(a < 0) {
    return "negative";
  }
    return "zero";
}

console.log(positivoOuNegativo(a));

//Exercicio 5
function verificaTriangulo(a,b,c) {
  if(((a+b+c) === 180) && (a >= 1) && (b >= 1) && (c >= 1)){
    return true;
  }else if((a < 0) || (b < 0) || (c < 0)) {
    return "voce inserio um angulo invalido"
  }
    return false;
}

console.log(verificaTriangulo(a,b,c));

