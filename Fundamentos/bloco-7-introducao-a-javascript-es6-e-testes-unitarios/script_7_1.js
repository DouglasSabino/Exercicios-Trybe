const testingScope = (escopo) => {
    if (escopo === true) {
        let continuacaoIf = ' ótimo, fui utilizada no escopo !';
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + `${continuacaoIf}`
        console.log(ifScope);
        } else {
        let continuacaoElse = ' ótimo, fui utilizada no escopo !'; 
        let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope + `${continuacaoElse}`);
    }
} 


testingScope(true)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let x = 0; x < oddsAndEvens.length; x++){
    for (let i = 0; i < oddsAndEvens.length; i++) {
        if(oddsAndEvens[i] > oddsAndEvens[i+1]) {
          let aux = oddsAndEvens[i+1]
          oddsAndEvens[i+1] = oddsAndEvens[i]
          oddsAndEvens[i] = aux
        }
    }
}

console.log(`${oddsAndEvens}`);





