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

function gerarValor(quantidade) {
  // inicializa um array vazio para guardar os números gerados
  let gerar = [];

  // enquanto não tivermos a quantidade desejada de números...
  while (gerar.length < quantidade) {
    // gera um número inteiro aleatório entre 1 e 60
    let aleatorio = Math.floor(Math.random() * 60) + 1;

    // só adiciona se ainda não existir no array (evita repetição)
    if (!gerar.includes(aleatorio)) {
      gerar.push(aleatorio);
    }
  }

  // quando o array estiver completo, retorna-o
  return gerar;
}

// pede ao usuário um número de 6 a 9 e converte a resposta para número
let valor = Number(prompt("Digite um valor de 6 a 9"));

function pegarValor(valor) {
  // verifica se o valor está fora do intervalo permitido
  if (valor < 6 || valor > 9) {
    alert("DIGITE UM VALOR ENTRE 6 E 9");
    return; // interrompe a execução se inválido
  }

  // se chegou aqui, o valor é válido: gera os números
  let resultado = gerarValor(valor);

  // mostra no alerta a lista final, unindo os números por vírgula
  alert(`Números gerados: ${resultado.join(", ")}`);
}

// chama a função principal para iniciar o processo
pegarValor(valor);

