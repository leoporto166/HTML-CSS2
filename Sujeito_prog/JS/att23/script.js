//Some todos os números de um array.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

let soma = numeros.reduce((acc, item) =>{
    return acc += item
}, 0)

console.log(soma)

console.log("--------------------------------")

//Dado um array de palavras, conte quantas letras tem no total.

let nomes = ["Leonardo", "Maria", "Jose", "Kaua", "Pig", "Carlos"];


let tot = nomes.reduce((acc, item, index) =>{
    return acc + item.length
},0)

console.log(tot)