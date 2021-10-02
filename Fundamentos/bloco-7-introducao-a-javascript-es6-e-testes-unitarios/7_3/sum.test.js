const sum = require('./sum.js')

describe('Exercicio 1',() => {
  it('Verifica se 4 + 5 = 9', () => {
      expect(sum(4,5)).toBe(9)
  });

  it('Verifica se 0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0)
  });

    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
      })

});