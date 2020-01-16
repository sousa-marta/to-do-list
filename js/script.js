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

buttonAdd.onclick = function(){
  let valorDigitado = inputAdd.value
  listaTarefas.push(valorDigitado)

  // Utilizar a função gerar tarefa aqui
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
  //Fim da função


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