//Exercicio 1
const a = 44, b = 44, c = 91;
let peca = "toRRe";
let nota = "100"; 

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

//Exercicio 6
function xadrez(peca) {
  let pecaLow = peca.toLowerCase();
  let resp = '';
  switch(pecaLow) {

    case 'torre':
        resp = "Horizontel e Vertical";
      break;
    case 'cavalo':
        resp = "Anda em 'L'";
      break;
    case 'bispo':
        resp = "Anda em Diagonal";
      break;
    case 'rei':
        resp = "Anda para todas as direções uma casa por vez";
      break;
    case 'rainha':
        resp = "Anda para todas as direções";            
      break;
    default:
        resp = "Peça invalida";


  }
  return resp;
}

console.log(xadrez(peca));

//Exercicio 7
function converteNota(nota) {
  let resp = '';

  if((nota < 0) || (nota > 100)) {
    resp = "Valor de nota invalido";
  }else if(nota >= 90) {
    resp = 'A';
  }else if(nota >= 80) {
    resp = 'B';
  }else if(nota >= 70) {
    resp = 'C';
  }else if(nota >= 60) {
    resp = 'D';
  }else if(nota >= 50) {
    resp = 'E';
  }else{
    resp = 'F';
  }
  return resp;
}

console.log(converteNota(nota));

//Exercicio 8
function verificaSeEPar(a,b,c) {
  
    if((a%2 === 0) || (b%2 === 0) || (c%2 === 0)) {
      return true;
    }

    return false;
}

console.log(verificaSeEPar(a,b,c));

//Exercicio 9
function verificaSeEImpar(a,b,c) {
  
    if((a%2 != 0) || (b%2 != 0) || (c%2 != 0)) {
      return true;
    }

    return false;
}

console.log(verificaSeEImpar(a,b,c));

//Exercicio 10
const custo = 10, valorVenda = 17;
let valorCustoTotal = custo + (custo * 20) / 100;
let lucro = 0;

function calculaLucro(valorCustoTotal, valorVenda) {
  if((valorCustoTotal <= 0) || (valorVenda <=0)){
    return "Valores incorretos"
  }

  lucro = (valorVenda - valorCustoTotal) * 1000;

  return lucro;

}

console.log(calculaLucro(valorCustoTotal, valorVenda));

//Exercicio 11
let salarioBruto = 3000;

function calculaInss(salarioBruto) {
let aliquota = 0;

if(salarioBruto <= 1556.94) {
  aliquota = (salarioBruto*8) / 100;
}else if(salarioBruto <= 2594.92) {
  aliquota = (salarioBruto*9) / 100;
}else if(salarioBruto <= 5189.82) {
  aliquota = (salarioBruto*11) / 100;  
}else {
  aliquota = 570.88
} 

  let salarioDeduzidoInss = salarioBruto - aliquota;
  return salarioDeduzidoInss;
}

let salarioBase = calculaInss(salarioBruto) 

function calculaImpostaDeRenda(salarioBase) {

let aliquota = 0;
let IR = 0;

if(salarioBase <= 1903.98) {
 IR = 0;
}else if(salarioBase <= 2826.65){
 IR = ((salarioBase*7.5)/100) - 142.80;
}else if(salarioBase <= 3751.05) {
 IR = ((salarioBase*15)/100) - 354,80;
}else if(salarioBase <= 4664.68) {
 IR = ((salarioBase*22.5)/100) - 636.13;
}else{
  IR = ((salarioBase*27.5)/100) - 869.36;
}

 let salarioDeduzidoIR = salarioBase - IR;
 return salarioDeduzidoIR;
}

console.log(calculaImpostaDeRenda(salarioBase));
