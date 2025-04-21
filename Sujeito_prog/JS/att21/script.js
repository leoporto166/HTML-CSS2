//Dado um array de números, encontre o primeiro número maior que 50.

let numeros = [1, 2, 3, 5, 10, 20, 21, 50, 33, 70, 32, 60];

let maior = numeros.find((item) => {
    return item > 50;
})

console.log(maior);

console.log("-------------------------------------")

//Dado um array de usuários, encontre o usuário com o nome "Maria".

let nomes = ["Leonardo", "Maria", "Jose", "Kaua", "Pig"];

let nome = nomes.find((item) =>{
    return item === "Maria"
})

console.log(nome)