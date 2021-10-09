//Exercicio 2

const checkNumber = (myNumber, number) => number === myNumber

const loterryNumber = (myNumber, callback) => {
    const numb = Math.ceil(Math.random()*4)

    return callback(myNumber, numb) ? 'Luck day, you won!' : 'Try Again!'
}

console.log(loterryNumber(1,checkNumber));