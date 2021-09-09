let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let newInfo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
  };  

  //Exercicio 1
  console.log("Bem-vinda, " + info.personagem);

  //Exercicio 2
  info['recorrente'] = 'sim';
  console.log(info);

  //Exercicio 3
  for(let atribute in info){
      console.log(atribute);
  }

  //Exercicio 4
  for(let atribute in info){
    console.log(info[atribute]);
}

  //Exercicio 5
  newInfo['recorrente'] = 'sim';
  for(let atribute in info,newInfo){
    if(info[atribute] == newInfo[atribute]) {
      console.log('Ambos recorrentes');
      break;  
      }  
    console.log(info[atribute] + ' e ' + newInfo[atribute]);
}