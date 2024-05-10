let tarefas = [];

function adicionar(){
    let listaTarefas = document.getElementById("listaTarefas");
    let adicionarTarefa = document.getElementById("adicionarTarefa"); 
    let nomeTarefa = adicionarTarefa.value.trim(); 

    if (!nomeTarefa) {
        alert("Digite uma tarefa.")
    } else {
        tarefas.push(nomeTarefa);
        //alert("Tarefa adicionada com sucesso.");
    };

    let novaTarefa = document.createElement("li");

    let checkbox = document.createElement("input"); 
    checkbox.type = "checkbox";

    let nomeTarefaNode = document.createTextNode(nomeTarefa);

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(nomeTarefaNode); 
     

    checkbox.addEventListener("click", function(){
        novaTarefa.classList.toggle("concluido");
    });

    listaTarefas.appendChild(novaTarefa); 

    adicionarTarefa.value=""; 
};

function limpar(){
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; 
}; 


