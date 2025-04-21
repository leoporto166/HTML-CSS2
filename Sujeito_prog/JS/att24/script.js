// Crie uma lista de produtos


// Cria a lista de produtos
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

// Exibe a lista de produtos no console
console.log(produtos);

// Exibe o número de produtos na lista
console.log(produtos.length);

// Remove o item no índice 2 (que é "Mouse") da lista
produtos.splice(2, 1);

// Exibe a lista de produtos após a remoção
console.log(produtos);

// Definindo a busca que queremos fazer
let busca = "Telefone";

// Verifica se o produto da busca está na lista
if(produtos.includes(busca)) {
    // Se encontrar o produto, exibe a mensagem "Produto encontrado!"
    console.log("Produto encontrado!");
} else {
    // Se não encontrar o produto, exibe a mensagem "Produto não encontrado"
    console.log("Produto não encontrado");
}

// Remove o item no índice 1 (que é "Telefone") da lista
produtos.splice(1, 1);

// Exibe a lista de produtos após a remoção
console.log(produtos);

console.log("----------------------------------------")

//Crie uma lista de apenas numeros 1,3,5,7,0,9​

// Cria a lista de números
let numeros = [1,3,5,7,0,9];

console.log(numeros); // Exibe a lista original no console

// Ordena a lista do menor para o maior usando sort
let ordem = numeros.sort((a, b) => {
    return a - b; // Se o resultado for negativo, 'a' vem antes de 'b'
});

console.log(ordem); // Exibe a lista ordenada

// Remove o primeiro número da lista (o menor, que está na posição 0)
ordem.shift();

console.log(ordem); // Exibe a lista após remover o primeiro número

// Inverte a ordem da lista (do maior para o menor)
ordem.reverse();

console.log(ordem); // Exibe a lista final invertida

console.log("----------------------------------------")

//Crie uma string que contenha o dia de hoje

// string que contem o dia de hoje
let data = new Date("April 21, 2025");

console.log(data); // Exibe o objeto Date completo

// Obtendo o dia do mês (1-31)
let dia = data.getDate(); // Usa getDate() para pegar o dia do mês
console.log(dia); // Exibe o dia do mês

// Obtendo o mês (1-12) - getMonth() retorna 0 para Janeiro, por isso somamos 1
let mes = data.getMonth() + 1; 
console.log(mes); // Exibe o mês (considerando que o mês começa em 1)

 // Obtendo o ano (ex: 2025)
let ano = data.getFullYear(); 
console.log(ano); // Exibe o ano completo

