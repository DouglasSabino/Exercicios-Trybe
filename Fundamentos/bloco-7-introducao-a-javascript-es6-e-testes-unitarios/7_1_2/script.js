let button = document.getElementById('button')
let label =  document.getElementById('label')
let clicks = 1

button.addEventListener('click', function (event) {
    label.innerText = `Quantidade de clicks: ${clicks}`
    clicks++
})