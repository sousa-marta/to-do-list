
let board = document.getElementById('board')
let buttonAdd = document.getElementById('add')
let inputAdd = document.getElementById('novaTarefa')
let listaTarefas = []

if(localStorage.getItem('listaTarefas')){
  listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))
} else {
  listaTarefas = []
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

//Precisa criar o espaço no localStorage antes de tudo
mostrarNaTela(listaTarefas)


buttonAdd.onclick = function(){
  let valorDigitado = inputAdd.value
  listaTarefas.push(valorDigitado)

  let tarefa = document.createElement('div')
  tarefa.setAttribute('class', 'tarefa')

  let titulo = document.createElement('div')
  titulo.setAttribute('class', 'col-md-8 col-10')
  titulo.textContent = valorDigitado

  let buttonSpace = document.createElement('div')
  buttonSpace.setAttribute('class', 'col-md-2')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')

  buttonSpace.appendChild(checkbox)
  tarefa.appendChild(titulo)
  tarefa.appendChild(buttonSpace)

  board.appendChild(tarefa)

  //Sobreescrever as informações que estavam no localStorage
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

function mostrarNaTela(listaTarefas){
  //tipo foreach
  for(let item of listaTarefas){
    gerarTarefa(item)
  }
}

function gerarTarefa(valorDigitado){
  let tarefa = document.createElement('div')
  tarefa.setAttribute('class', 'tarefa')

  let titulo = document.createElement('div')
  titulo.setAttribute('class', 'col-md-8 col-10')
  titulo.textContent = valorDigitado

  let buttonSpace = document.createElement('div')
  buttonSpace.setAttribute('class', 'col-md-2')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')

  buttonSpace.appendChild(checkbox)
  tarefa.appendChild(titulo)
  tarefa.appendChild(buttonSpace)

  board.appendChild(tarefa)
}