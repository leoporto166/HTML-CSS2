//Crie uma função que receba uma string e retorne se ela é um palíndromo (ex: "arara", "ana").

let palavras = ["arara", "ana", "leonardo", "flor"];

function palindromo(palavra){
    let invertida = palavra.split("").reverse().join("");
    
    if(palavra === invertida){
        return true
    }

    return false

}

console.log(palindromo("arara"))
console.log(palindromo("leonardo"))
