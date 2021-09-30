const fatorial = (num) => {
    let fatorial = num
    for(let i = 1; i < num; i++) {
        fatorial = fatorial * i
    }
    console.log(`o fatorial de ${num} é ${fatorial}`)
}
fatorial(5)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

const biggerWord = (phrase) => {
    phrase = phrase.split(' ')
    let biggerWord = ""
    for(let i = 0; i < phrase.length; i++){
        if(phrase[i].length > biggerWord.length) {
            biggerWord = phrase[i]
        }
    }
    console.log(`a maior palavra é: ${biggerWord}`);
}

let phrase = "Antônio foi no banheiro e não sabemos o que aconteceu"
biggerWord(phrase)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

const getString = (word) => {
    let determinedString = 'trybe x aqui'
    determinedString = determinedString.split('')
    for(let i = 0; i < determinedString.length; i++) {
      if(determinedString[i] === 'x' || determinedString[i] === 'X') {
         determinedString[i] = word
      } 
    }
    word = determinedString.join('')
    console.log(word);
}

let word = 'boleto'
getString(word)

//------------------------------------------------------------------------------------------------------------------------------------------------------------