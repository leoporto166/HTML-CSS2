

function registrar(event){
    event.preventDefault();
    let registro = document.getElementById("iregistro");
    let area = document.getElementById("lista");

    if(registro.value.trim()  !== ""){
        const item = document.createElement("li");
        item.textContent = registro.value + " ";

        const botao = document.createElement("button");
        botao.textContent = "Excluir";
        botao.style.margin = "5px";
        botao.onclick = function(){
            area.removeChild(item);
        };

        item.appendChild(botao);
        area.appendChild(item);
        registro.value = "";
    };

};