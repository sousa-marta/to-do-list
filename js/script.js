let board = document.getElementById('board')
let inputAdd = document.getElementById('novaTarefa')
let buttonAdd = document.getElementById('add')
let listaTarefas = []

//Primeiramente criar o espaço no localStorage
if(localStorage.getItem('listaTarefas')){
  listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))
} else {
  listaTarefas = []
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

//Exibir mensagem de "nenhuma tarefa" quando não houverem tarefas:
console.log(localStorage.getItem('listaTarefas'))

// if(localStorage.getItem('listaTarefa') == []){
  let mensagem = document.createElement('p')
  mensagem.textContent='Todas as tarefas foram concluídas, parabéns!'
  board.appendChild(mensagem)
// }

mostrarNaTela(listaTarefas)

inputAdd.onkeypress = function(event){
  // console.log(event)
  if(event.key=='Enter'){
    let valorDigitado = inputAdd.value
    listaTarefas.push(valorDigitado)

    gerarTarefa(valorDigitado, listaTarefas.length -1)
    //Sobreescrever as informações que estavam no localStorage
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))

    //Para limpar o campo depois de digitado
    inputAdd.value = ""
  }
}

buttonAdd.onclick = function(){
  // let botaoClicado = event.target
  // console.log(event)
  // console.log(botaoClicado)

  let valorDigitado = inputAdd.value
  listaTarefas.push(valorDigitado)

  gerarTarefa(valorDigitado, listaTarefas.length -1)


  //Sobreescrever as informações que estavam no localStorage
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))

  //Para limpar o campo depois de digitado
  inputAdd.value = ""
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
  tarefa.setAttribute('class', 'tarefa col-xs-11 col-md-8 mb-2')
  tarefa.setAttribute('position',position)

  let titulo = document.createElement('div')
  titulo.setAttribute('class', 'col-xs-11 col-md-10')
  titulo.textContent = valorDigitado

  let buttonSpace = document.createElement('div')
  buttonSpace.setAttribute('class', 'col-xs-1 col-md-2')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')

  buttonSpace.appendChild(checkbox)
  tarefa.appendChild(titulo)
  tarefa.appendChild(buttonSpace)

  board.appendChild(tarefa)

  //Funcinalidade para remover a tarefa do localStorage e do painel:
  checkbox.onclick = function(event){
    /*Jeito mais longo de resolver o remover da tela:
      o event aqui não precisa utilizar pq puxei o tarefa.remove()
      console.log(event.target)  
      let tarefaAvo = event.target.parentNode.parentNode
      tarefaAvo.remove()
      console.log(listaTarefas)*/

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


}

