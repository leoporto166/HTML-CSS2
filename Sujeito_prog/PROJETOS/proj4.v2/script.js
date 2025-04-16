
let listElement = document.querySelector("#app ul");
let buttonElement = document.querySelector("#app button");
let inputElement = document.querySelector("#app input");

let tarefas = JSON.parse(localStorage.getItem("33listaTarefas")) || [];

function renderTarefas(){
    listElement.innerHTML = "";

    tarefas.map((nome, index)=>{

        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(nome);
        let excElement = document.createElement("button")
        excElement.textContent = "Excluir";
        excElement.style.margin = "5px";

        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);
        liElement.appendChild(excElement);

        excElement.onclick = function (){
            tarefas.splice(index, 1);
            renderTarefas();
            salvarTarefas();
        }

    })

}

renderTarefas();

function addTarefas(){
    if(inputElement.value === ''){
        alert("Digite uma tarefa!");
        return false;
    }
    else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = "";

        renderTarefas();
        salvarTarefas(); 
    }
}


buttonElement.onclick = addTarefas;

function salvarTarefas(){
    localStorage.setItem("33listaTarefas", JSON.stringify(tarefas));
}
