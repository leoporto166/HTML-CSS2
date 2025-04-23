//Descrição: Implemente uma função compactarTexto(texto) que compacta uma string repetitiva usando a lógica de "run-length encoding"

let texto = ("aaabbbbcc");



function compactarTexto(texto){

let result = "";
let contador = 1;

for(let i = 0; i < texto.length; i++){
    if(texto[i] === texto[i+1]){
        contador++;
    }
    else{
        result += texto[i] + contador;
        contador = 1;
    }

 
}
   return result
}

console.log(compactarTexto(texto))