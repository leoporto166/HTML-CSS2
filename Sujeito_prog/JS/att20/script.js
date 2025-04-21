//Dado um array de números, retorne um novo array com o dobro de cada número.

let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10]

let dobro = numeros.map((item, index) => {
   return item * 2
})

console.log(dobro)

console.log("----------------------------------------")

//Dado um array de strings, retorne um array com todas as palavras em maiúsculo.

let palavras = ["leo", "pig", "kaua", "adasdas", "fifa"]

let maiusculo = palavras.map((item, index) => {
    return item.toUpperCase()
})

console.log(maiusculo)