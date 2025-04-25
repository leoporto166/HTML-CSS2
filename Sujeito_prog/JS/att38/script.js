//Crie uma função que recebe um array de números e retorna true se todos os números forem positivos, ou false se encontrar algum número negativo ou zero.

let numeros = [1, 0, 2, 3, 4, 5];

function Verifica(numeros){
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] <= 0){
            return false;
        }   
    }  
    
    return true;
}

console.log(Verifica(numeros))