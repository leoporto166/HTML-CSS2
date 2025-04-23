//Crie a função interseccao(arr1, arr2) que retorna um novo array com os elementos comuns entre os dois arrays (sem repetições).

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8 , 33];
let numeros2 = [10, 11, 2, 4, 7, 8, 33];

console.log(numeros1, numeros2);

function interseccao(numeros1, numeros2){
    let numeros3 = [2, 8];

    for (let i = 0; i < numeros1.length; i++){
        let elemento = numeros1[i];
        if (numeros2.includes(elemento) && !numeros3.includes(elemento)){
            numeros3.push(elemento);
        }
    }

    console.log(numeros3); 
}

interseccao(numeros1, numeros2)

