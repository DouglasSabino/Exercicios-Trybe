//Exercicio 1
let n = 5;
let simbolo = "*";
let linha = '';
let posicao = n;

for(let i = 0; i < n; i++) {
  for(let x = 0; x < n; x++) {
    linha = linha + simbolo;
  }
  console.log(linha);
  linha = '';
}

//Exercicio 2
  for(let x = 0; x < n; x++) {
    linha = linha + simbolo;
    console.log(linha);
  }

//Exercicio 3
linha = '';
for(let i = 0; i < n; i++) {
  for(let x = 0; x <= n; x++) {
   if(x < posicao) {
     linha += " ";
  }else {
    linha += "*";
   } 
  }

  console.log(linha);
  linha = "";
  posicao--;
}

 
