//FUNCAO ANONIMA

/*
 () => {}
 
 1- Os parenteses, que é por onde a função recebe os asrgumentos
 2- "seta" => - responsavel pelo nome "arrow"
 3- E as chaves: o bloco de codigo que representa o corpo da função

*/

function somar(a, b){
    let total = a + b;
    return console.log(total);
}

somar(3, 30);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2
    console.log(total)
}

subtrair(63, 30)

let numeros = [1, 2, 3];

numeros.map((item) => {
    console.log(item)
})