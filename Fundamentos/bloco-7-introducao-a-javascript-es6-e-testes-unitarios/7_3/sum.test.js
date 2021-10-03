const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./sum.js')

describe('Exercicio 1',() => {
  it('Verifica se 4 + 5 = 9', () => {
      expect(sum(4,5)).toBe(9)
  });

  it('Verifica se 0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0)
  });

  it('deve disparar um erro', () => {
        expect(() => sum(4, '5')).toThrowError();
  });

  it('deve disparar um erro caso receba como parâmetro uma string', () =>{
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });  
});

describe('Exercicio 2', () => {
    it('verifica se remove o item certo do array', () => {
      expect(myRemove([1,2,3,4],3)).toEqual([1,2,4])
    });


    it('verifica se retorno não é igual a entrada', () => {
        expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4])
    });


    it('verifica se o array continua intacto', () => {
        expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4])
    });
});

describe('Exercicio 3', () =>{
    it('verifica se 15 retorna fizzbuzz', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });

    it('verifica se numero divisivel por 3 retorna fizz', () => {
      expect(myFizzBuzz(3)).toBe('fizz')
    });

    it('verifica se numero divisivel por 5 retorna buzz', () => {
      expect(myFizzBuzz(5)).toBe('buzz')
    });

    it('verifica caracter que não seja um numero', () => {
      expect(myFizzBuzz('a')).toBe(false)
    });
});

describe('Exercicio 4', () => {
    it('verifica de encode e decode são funções', () => {
      expect(encode).toBeDefined()
      expect(decode).toBeDefined()
    });

    it('verifica encode', () => {
      expect(encode('a')).toBe('1')
      expect(encode('e')).toBe('2')
      expect(encode('i')).toBe('3')
      expect(encode('o')).toBe('4')
      expect(encode('u')).toBe('5')
    });

    it('verifica decode', () => {
      expect(decode('1')).toBe('a')
      expect(decode('2')).toBe('e')
      expect(decode('3')).toBe('i')
      expect(decode('4')).toBe('o')
      expect(decode('5')).toBe('u')
    });

    it('verifica outros casos encode', () => {
      expect(encode('t')).toBe('t')
      expect(encode('q')).toBe('q')
      expect(encode('h')).toBe('h')
      expect(encode('v')).toBe('v')
      expect(encode('w')).toBe('w')
    });

    it('verifica outros casos decode', () => {
      expect(encode('7')).toBe('7')
      expect(encode('8')).toBe('8')
      expect(encode('0')).toBe('0')
      expect(encode('6')).toBe('6')
      expect(encode('9')).toBe('9')
    });

    it('verifica tamanaho da string retornada encode', () => {
      expect(encode('ana').length).toEqual(3)
    });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
