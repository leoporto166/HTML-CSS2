/*  
  Crie uma função que espere como argumento um número e esse número precisa ser de 6 até 9.  
  Caso seja um número menor que 6 ou maior que 9 essa função deverá retornar um array vazio  
  e um aviso no console que não é possível usar esse número.

  Dentro da função você deverá pegar o número recebido como argumento e gerar uma lista de números  
  aleatórios com base no tamanho do argumento.  
  Exemplo: se o usuário mandou 6, você deverá gerar uma lista de números contendo 6 números  
  aleatórios, sem repetir nenhum, e os números gerados precisam ser entre 01 até 60.

  E ao final deverá retornar uma lista com os números gerados.  
*/

// pede ao usuário um número de 6 a 9 e converte a resposta para número
let valor = Number(prompt("Digite um valor de 6 a 9"));

// função principal que valida o valor e gera os números
function pegarValor(valor) {
  // verifica se o valor está fora do intervalo permitido
  if (valor < 6 || valor > 9) {
    alert("DIGITE UM VALOR ENTRE 6 E 9");
    return []; // interrompe a execução se o valor for inválido
  }

  // gera os números se o valor for válido
  let resultado = gerarValor(valor);

  // exibe os números gerados, separados por vírgula
  alert(`Números gerados: ${resultado.join(", ")}`);
}

// função que gera números aleatórios sem repetição
function gerarValor(quantidade) {
  let gerar = []; // array para armazenar os números gerados

  // enquanto o array não atingir a quantidade desejada
  while (gerar.length < quantidade) {
    // gera um número aleatório entre 1 e 60
    let aleatorio = Math.floor(Math.random() * 60) + 1;

    // adiciona o número apenas se ainda não existir no array
    if (!gerar.includes(aleatorio)) {
      gerar.push(aleatorio);
    }
  }

  // retorna o array final com os números gerados
  return gerar;
}

// inicia o processo chamando a função principal
pegarValor(valor);

