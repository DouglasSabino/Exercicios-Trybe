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