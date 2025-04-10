

//switch

function clicou(){
    var valor = prompt("Digite um número de 1 a 4")
    
    switch(Number(valor)){
        case 1:
            alert("Você escolheu Suco");
        break;

        case 2:
            alert("Você escolheu Refrigerante");
        break;

        case 3:
            alert("Você escolheu Prato da Cada");
        break;

        case 4:
            alert("Você escolheu Chamar garçom");
        break;

        default:
            alert("Digite um número de 1 a 4");
        break;

    }
}

