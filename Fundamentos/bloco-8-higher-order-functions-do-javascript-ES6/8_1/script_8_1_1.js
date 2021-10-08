// Exercicio 1

const funcionario = (nome) => {
  const fullname = nome.toLowerCase().split(' ').join('_')
  return {
   fullname: nome,
   email: `${fullname}@trybe.com`
  }
};

const newEmployees = (funcionario) => {
  
    const employees = {
      id1: funcionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: funcionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: funcionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }

    return employees;
  };

console.log(newEmployees(funcionario));  
