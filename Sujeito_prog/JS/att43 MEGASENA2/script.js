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

function gerarNumeros(qtdNumeros){
  if(qtdNumeros < 6 || qtdNumeros > 9){
    console.log("Apenas numeros de 6 ate 9")
    return[];
  }

  const numeros = [];
  while(numeros.length < qtdNumeros){
      const aleatorio = Math.floor(Math.random() * 60) + 1;
    if(!numeros.includes(aleatorio)){
      numeros.push(aleatorio)
    }

  }

  return numeros;
}

const numerosSorteado = gerarNumeros(8)
console.log(numerosSorteado)


