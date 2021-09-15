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

  function implementaBotaoCor() {
    let buttonCor = document.createElement('button')
    buttonCor.id = 'btn-color'
    buttonCor.innerText = 'Adiciona Cor'
    let divPai = document.getElementsByTagName('div')[2]
    divPai.appendChild(buttonCor)
    }

  implementaBotaoCor()  

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------
  function adicionarTarefa() {
    let botao = document.getElementById('btn-add')
    botao.addEventListener('click',function(event){
      let input = document.getElementById('task-input')
      let criaTarefa = document.createElement('span')
      criaTarefa.innerHTML = input.value + '<br>'
      let minhasTarefas = document.getElementsByClassName('my-tasks')[0]
      minhasTarefas.appendChild(criaTarefa)
      input.value = ''
    })
  }

  adicionarTarefa();
//----------------------------------------------------------------------------------------------------------------------------------------------------------
  function adiconaDiv(cor) {
    let minhasTarefas = document.getElementsByClassName('my-tasks')[0]
    let criaDiv = document.createElement('div')
    criaDiv.style.display = 'block'
    criaDiv.style.margin = 'auto'
    criaDiv.className = 'task'
    criaDiv.style.height = '50px'
    criaDiv.style.width = '50px'
    criaDiv.style.backgroundColor = cor
    minhasTarefas.appendChild(criaDiv)
  }

  function acaoCor() {
    let botaoC = document.getElementById('btn-color')
    let input = document.getElementById('task-input')
    botaoC.addEventListener('click', function() {
    adiconaDiv(input.value)
    input.value = ''  
    })
  }

  acaoCor();
//----------------------------------------------------------------------------------------------------------------------------------------------------------

 let selectedTask = document.getElementsByClassName('task selected')
 let myTasks = document.querySelectorA('.task')
   myTasks.addEventListener('click', function(event) {
    if(selectedTask.length === 0) {
      event.target.className = 'task selected'
    }else {
      event.target.className = 'task'
    }
   }) 
 
  //COPIADO DO GABARITO PARA ESTUDAR LOGICA (AINDA NÃO FUNCIONA)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
//COPIADO DO GABARITO PARA ESTUDAR LOGICA (AINDA NÃO FUNCIONA)
}
