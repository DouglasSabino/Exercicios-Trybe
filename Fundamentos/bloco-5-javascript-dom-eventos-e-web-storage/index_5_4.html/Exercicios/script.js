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
            btn.addEventListener('click', function() {
                for(let i = 0; i < paragraph.length; i++) {
                paragraph[i].style.color = input.value
                }
                input.value = ''
            })
    }

    color()

//-------------------------------------------------------------- REQUISITO 2 ---------------------------------------------------------------------------------    

    function fontSize() {
        let paragraph = document.getElementsByClassName('p')
        let input = document.getElementById('input')
        let btn = document.getElementById('fontSize')
        btn.addEventListener('click', function() {
            for(let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.fontSize = input.value
            }
            input.value = ''
        })
    }

    fontSize()


//-------------------------------------------------------------- REQUISITO 3 ---------------------------------------------------------------------------------        

    function espace() {
        let paragraph = document.getElementsByClassName('p')
        let input = document.getElementById('input')
        let btn = document.getElementById('espace') 
        btn.addEventListener('click', function() {
            for(let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.lineHeight = input.value
            }
            input.value = ''
        })
    }

    espace();

//-------------------------------------------------------------- REQUISITO 4 ---------------------------------------------------------------------------------        

    function fontFamily() {
        let paragraph = document.getElementsByClassName('p')
        let input = document.getElementById('input')
        let btn = document.getElementById('fontFamily') 
        btn.addEventListener('click', function() {
            for(let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.fontFamily = input.value
            }
            input.value = ''
        })
   }

   fontFamily();

//-------------------------------------------------------------- REQUISITO 5 ---------------------------------------------------------------------------------           
}