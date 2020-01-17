let board = document.getElementById('board')
let inputAdd = document.getElementById('novaTarefa')
let buttonAdd = document.getElementById('add')
let listaTarefas = []

//Precisa criar o espaço no localStorage antes de tudo
if(localStorage.getItem('listaTarefas')){
  listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))
} else {
  listaTarefas = []
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

mostrarNaTela(listaTarefas)

buttonAdd.onclick = function(event){

  let botaoClicado = event.target

  // console.log(event)
  // console.log(botaoClicado)

  let valorDigitado = inputAdd.value
  listaTarefas.push(valorDigitado)

  gerarTarefa(valorDigitado, listaTarefas.length -1)


  //Sobreescrever as informações que estavam no localStorage
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

function mostrarNaTela(listaTarefas){
  //tipo foreach
  /* for(let item of listaTarefas){
     gerarTarefa(item)
    } */
  board.innerHTML = ""

  listaTarefas.forEach(function(value,key){
    gerarTarefa(value,key)
  })  
}

function gerarTarefa(valorDigitado,position){
  let tarefa = document.createElement('div')
  tarefa.setAttribute('class', 'tarefa col-xs-11 col-md-8')
  tarefa.setAttribute('position',position)

  let titulo = document.createElement('div')
  titulo.setAttribute('class', 'col-xs-11 col-md-10')
  titulo.textContent = valorDigitado

  let buttonSpace = document.createElement('div')
  buttonSpace.setAttribute('class', 'col-xs-1 col-md-2')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')

  checkbox.onclick = function(event){
    //o event aqui não precisa utilizar pq puxei o tarefa.remove()
    // console.log(event.target)
    // console.log(event.target.parentNode.parentNode)

    // Jeito mais longo de resolver:
    /* let tarefaAvo = event.target.parentNode.parentNode
       tarefaAvo.remove()*/

    // console.log(listaTarefas)

    let posicaoTarefa = tarefa.getAttribute('position')
    listaTarefas = listaTarefas.filter(function(value,position){
      return position != posicaoTarefa //condição a ser executada do array
    })

    //para reorganizar posições do html após retirada do elemento
    mostrarNaTela(listaTarefas)

    //Salvar lista novamente no localstorage
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))

    // console.log(listaTarefas)

    tarefa.remove()
  }

  buttonSpace.appendChild(checkbox)
  tarefa.appendChild(titulo)
  tarefa.appendChild(buttonSpace)

  board.appendChild(tarefa)
}

