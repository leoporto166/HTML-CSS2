//Crie um array com 10 números e imprima apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pares = numeros.filter((item) => item % 2 === 0);

console.log(pares)

console.log("-----------------------------------------")

//Adicione 3 nomes ao final de um array de nomes.

let nomes = ["Leonardo", "Joao Pedro", "Kaua"];

console.log(nomes)

nomes.push("Kiwi", "Pig", "Leo")

console.log(nomes)

console.log("-----------------------------------------")

//Remova o primeiro item de um array e imprima o array atualizado

let itens = ["item1", "item2", "item3", "item4", "item5"]

console.log(itens)

itens.splice(0, 1)

console.log(itens)

console.log("-----------------------------------------")

//Inverta a ordem de um array sem usar o .reverse(), só lógica.

