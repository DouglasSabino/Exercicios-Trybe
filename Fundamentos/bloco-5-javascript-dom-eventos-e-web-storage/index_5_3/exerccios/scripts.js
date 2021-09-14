function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
window.onload = function(){ 
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ul = document.getElementById('days')
// --------------------------------------------------------------------------------------------------------------------------------------------------------//
  function criaCalendario() {
    for(let i = 0; i < dezDaysList.length; i++) {
      let criaLi = document.createElement('li')
      if((dezDaysList[i] == 24) || (dezDaysList[i] == 25) || (dezDaysList[i] == 31)) {
        criaLi.className = 'day holiday'
        if(dezDaysList[i] == 25) {
          criaLi.className = 'day holiday friday'
        }
      }else if((dezDaysList[i] == 4) || (dezDaysList[i] == 11) || (dezDaysList[i] == 18)) {
        criaLi.className = 'day friday'
      }else{
        criaLi.className = 'day'
      }
      criaLi.innerText = dezDaysList[i]
      ul.appendChild(criaLi);
    }
  }

  criaCalendario();
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
  function implementaBotao() {
    let button = document.createElement('button')
    button.id = 'btn-holiday'
    button.innerText = 'Feriados'
    let divPai = document.getElementsByTagName('div')[2]
    divPai.appendChild(button)
  }

  implementaBotao();

  function clickFeriado() {
    let dias = document.getElementsByClassName('holiday')
    for(let i = 0; i < dias.length; i++) {
      if(dias[i].style.backgroundColor == 'green') {
        dias[i].style.backgroundColor = 'unset'
      }else{
        dias[i].style.backgroundColor = 'green'
      }
    }
  } 

  function acaoFeriado() {
    let button = document.getElementById('btn-holiday')
    button.addEventListener('click',clickFeriado)
  }

  acaoFeriado()
//--------------------------------------------------------------------------------------------------------------------------------------------------------//  
  function implementaSexta() {
    let button = document.createElement('button')
    button.id = 'btn-friday'
    button.innerText = 'Sexta-Feira'
    let divPai = document.getElementsByTagName('div')[2]
    divPai.appendChild(button)
  }

  function acaoSexta() {
    let button = document.getElementById('btn-friday')
    button.addEventListener('click',clickSexta)
  }

  function clickSexta() {
    let dias = document.getElementsByClassName('friday')
    for(let i = 0; i < dias.length; i++) {
      let aux = ['4','11','18','25']
      if(dias[i].innerText != '*') {
        dias[i].innerText = '*'
      }else{ 

        for(let x = 0; x < dias.length; x++) {
         dias[i].innerText = aux[i]
          }
        }

        
      }
    } 
    implementaSexta();  
    acaoSexta();
//--------------------------------------------------------------------------------------------------------------------------------------------------------
  function mouseOver(){
  let li = document.getElementsByClassName('day')
   for(let i = 0; i < li.length; i++) {
     li[i].addEventListener('mouseover', function(event) {
       event.target.style.fontSize = '48px'
      })
   }
  }

  mouseOver()

  function mouseOut() {
  let li = document.getElementsByClassName('day')
   for(let i = 0; i < li.length; i++) {
     li[i].addEventListener('mouseout', function(event) {
       event.target.style.fontSize = '20px'
      })
   }

  }

  mouseOut()
}
