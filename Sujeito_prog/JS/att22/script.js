//Dado um array de números, retorne apenas os ímpares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let impar = numeros.filter((item) =>{
    return item % 2 != 0
})

console.log(impar)

console.log("-------------------------------------")

//Dado um array de nomes, filtre os que têm mais de 5 letras.

let nomes = ["Leonardo", "Maria", "Jose", "Kaua", "Pig", "Carlos"];

let cinco = nomes.filter((item) =>{
    return item.length > 5
})

console.log(cinco)