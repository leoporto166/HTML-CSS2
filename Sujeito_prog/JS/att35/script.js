// Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33];

function VerificarNumero(numeros, n){
    if(numeros.includes(n)){
        console.log(`O numero ${n} está no array`);
    }
    else{
        console.log(`O numero ${n} não está no array`);
    }
}

VerificarNumero(numeros, 33)
