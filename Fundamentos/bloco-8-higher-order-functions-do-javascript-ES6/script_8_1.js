// Exercicio 1

const funcionario = (nome) => {
  const sufixo = '@trybe.com'  
  return {
   fullname: nome,
   email: `${nome}${sufixo}`
  }
};

const newEmployees = (funcionario) => {
    const nome1 = 'Pedro Guerra'
    const nome2 = 'Luiza Drumond'
    const nome3 = 'Carla Paiva'

    const employees = {
      id1: funcionario(nome1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funcionario(nome2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funcionario(nome3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }

    return employees;
  };

  console.log(newEmployees(funcionario));