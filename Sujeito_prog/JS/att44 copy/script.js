/*
  Crie uma função que receba como argumento um número entre 2 e 4.
  Se o número for inválido, retorne um array vazio e exiba no console:
  "Informe um número de 2 a 4.".

  Se o número for válido, gere nomes de usuários aleatórios.
  Cada nome deve ser no formato: "user" seguido de 4 dígitos aleatórios (por exemplo: user4837).
  Não deve haver repetição de usuários.

  Retorne o array com todos os usuários gerados.
*/

let valor = Number(prompt("Digite um número de 2 a 4"));

function pegarValor(valor){
    if(valor < 2 || valor > 4){
        alert("Informe um número de 2 a 4");
        return [];
    }

    let usuarios = gerarNome(valor)
    alert(`Essas são as opções de nomes que criamos ${usuarios. join(", ")}`)

}

function gerarNome(quantidade){
    let gerar = [];

    while(gerar.length < 4){
        let aleatorio = Math.floor(Math.random() * 10000); 
        let numeroFormatado = aleatorio.toString().padStart(4, "0");
        let nomeUsuario = "user" + numeroFormatado;

        if(!gerar.includes(nomeUsuario)){
        gerar.push(nomeUsuario);
        }
    }

    return gerar

}

pegarValor(valor)