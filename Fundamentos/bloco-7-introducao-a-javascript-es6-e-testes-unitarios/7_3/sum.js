function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
const encode = (string) => {

  let vetor = [];
  let frase;
  vetor = string.split("");
  console.log(vetor);

  for(let i = 0 ; i < vetor.length ; i++){

    if(vetor[i] == "a"){
        vetor[i] = "1";
    }else if(vetor[i] == "e"){
        vetor[i] = "2";
    }else if(vetor[i] == "i"){
        vetor[i] = "3";
    }else if(vetor[i] == "o"){
        vetor[i] = "4";
    }else if(vetor[i] == "u"){
        vetor[i] = "5";
    }  
    
  }
  
  frase = vetor.join('');

  return frase;

}

const decode = (string) => {

  let vetor = [];
  let frase;
  vetor = string.split("");
  console.log(vetor);

  for(let i = 0 ; i < vetor.length ; i++){

    if(vetor[i] == "1"){
        vetor[i] = "a";
    }else if(vetor[i] == "2"){
        vetor[i] = "e";
    }else if(vetor[i] == "3"){
        vetor[i] = "i";
    }else if(vetor[i] == "4"){
        vetor[i] = "o";
    }else if(vetor[i] == "5"){
        vetor[i] = "u";
    }  
    
  }
  
  frase = vetor.join('');

  return frase;
} 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

const techList = (techList, nome) => {
  if(techList.length < 1) return 'Vazio!'
  
  let vetorOrganizado = techList.sort()
  let vetorObjetos = []

  for(let i = 0; i < techList.length; i++) {
    let objeto = {
      tech: vetorOrganizado[i],
      name: nome 
      }
      vetorObjetos.push(objeto)
    }
  return vetorObjetos
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

const  hydrate = (string) => {
  let soma = 0;
  
  for(let i = 0 ; i < string.length ; i++){
    
    switch(string[i]){
      case '1':
        soma = soma + 1;
        break;
      case '2':
        soma = soma + 2;
        break;
      case '3':
        soma = soma + 3;
        break;
      case '4':
        soma = soma + 4;
        break;
      case '5':
        soma = soma + 5;
        break;
      case '6':
        soma = soma + 6;
        break;
      case '7':
        soma = soma + 7;
        break;
      case '8':
        soma = soma + 8;
        break;
      case '9':
        soma = soma + 9;
        break;  
    }

  }

  if(soma === 1){
    return soma + " copo de água";
  }
    return soma + " copos de água";   
}
  

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate}