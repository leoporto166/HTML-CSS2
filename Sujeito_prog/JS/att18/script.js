//Crie uma função que receba dois números e retorne a soma.
    

function soma(a, b){
    let tot = a + b
    console.log(tot)
}

soma(16.5, 16.5)

console.log("------------------------------------")

//Crie uma função que receba um nome e retorne uma saudação personalizada.

function saudacao(nome){
    console.log(`Bem vindo ${nome}`)

}

saudacao("GOIAS")

console.log("------------------------------------")

//Crie uma função que receba um array de números e retorne o maior número

let numeros = [1, 2, 5, 33, 4, 10];

function maior(numeros){
    return Math.max(...numeros)
}

console.log(maior(numeros))

console.log("------------------------------------")

//Crie uma função que receba um número e diga se ele é primo.

let numbers = [2, 7, 10, 12, 31, 80];

function primo(numeros) {
    if (numeros <= 1) return false;

    for (let i = 2; i < numeros; i++) {
        if (numeros % i === 0) {
            return false;
        }
    }

    return true;
}

// Agora percorre o array e mostra os primos
function primos(numbers) {
    numbers.map((num) => {
        if (primo(num)) {
            console.log(`${num} é primo`);
        }
    });
}

primos(numbers);

