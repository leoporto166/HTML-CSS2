/*
  Crie uma função que receba um número entre 3 e 5.
  Se o número for menor que 3 ou maior que 5, deve retornar um array vazio
  e mostrar no console: "Número inválido!".

  Se o número for válido, a função deve gerar uma lista de letras aleatórias.
  As letras devem ser sorteadas entre 'A' até 'Z' (maiúsculas).
  As letras sorteadas **não podem se repetir**.

  No final, a função deve retornar o array com as letras sorteadas.
*/

let qnt = Number(prompt("Digite um número de 3 a 5"));

function verificarQuantidade(qnt){
    if(qnt < 3 || qnt > 5){
        alert("NÚMERO INVALIDO")
        return [];
    }

    let resp = gerarLetras(qnt)
    alert(`Seu resultado foi: ${resp.join(", ")}`)

}

function gerarLetras(quantidade){
    let gerar =[]
    while(gerar.length < quantidade){
        let letras = String.fromCharCode(Math.floor(Math.random() * 26) + 65); 

        if(!gerar.includes(letras)){
            gerar.push(letras)
        }
    }

    return gerar

}

verificarQuantidade(qnt)