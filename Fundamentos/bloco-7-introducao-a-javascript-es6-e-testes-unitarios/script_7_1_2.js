const fatorial = (num) => {
    let fatorial = num
    for(let i = 1; i < num; i++) {
        fatorial = fatorial * i
    }
    console.log(`o fatorial de ${num} é ${fatorial}`)
}
fatorial(5)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
