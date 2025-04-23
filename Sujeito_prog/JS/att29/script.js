//Descrição: Crie uma função contarOcorrencias(array) que retorna um objeto com a contagem de cada elemento do array.

let letras = ["a", "b", "a", "c", "b", "a"];

function contarOcorrencias(letras){
    let contagem = {}


    for(let i = 0; i < letras.length; i++){   
        let letra = letras[i];
            if(contagem[letra]){
                contagem[letra]++
            }
            else{
                contagem[letra] = 1
            }
            
        }
        return contagem
}

console.log(contarOcorrencias(letras));

