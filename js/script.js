
let board = document.getElementById('board')

let buttonAdd = document.getElementById('add')

buttonAdd.onclick = function(){
  let tarefa = document.createElement('div')
  tarefa.setAttribute('class', 'tarefa')

  let titulo = document.createElement('div')
  titulo.setAttribute('class', 'col-md-8')
  titulo.textContent = "Essa é uma nova tarefa"

  let buttonSpace = document.createElement('div')
  buttonSpace.setAttribute('class', 'col-md-2')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')

  buttonSpace.appendChild(checkbox)
  tarefa.appendChild(titulo)
  tarefa.appendChild(buttonSpace)

  board.appendChild(tarefa)
}