//Exercicio 1
let n = 5;
let simbolo = "*";
let linha = '';

for(let i = 0; i < n; i++) {
  for(let x = 0; x < n; x++) {
    linha = linha + simbolo;
  }
  console.log(linha);
  linha = '';
}