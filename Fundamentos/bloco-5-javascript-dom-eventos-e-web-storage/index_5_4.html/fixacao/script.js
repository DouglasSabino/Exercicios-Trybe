window.onload = function() {

    function backgroundColor() {
        let body = document.getElementById('body')
        let input = document.getElementById('input')
        let btn = document.getElementById('backgroundColor')
        btn.addEventListener('click', function() {
            body.style.backgroundColor = input.value
            input.value = ''
        })
    }

    backgroundColor()

//-------------------------------------------------------------- REQUISITO 1 --------------------------------------------------------------------------------- 
  
    function color() {
        let paragraph = document.getElementsByClassName('p')
        let input = document.getElementById('input')
        let btn = document.getElementById('color')
        console.log(paragraph);
            btn.addEventListener('click', function() {
                for(let i = 0; i < paragraph.length; i++) {
                paragraph[i].style.color = input.value
                }
                input.value = ''
            })
    }

    color()

}