//Escreva uma função checarAnagrama(palavra1, palavra2) que retorna true se as palavras forem anagramas (mesmas letras, ordem diferente) e false caso contrário.


function checarAnagrama(palavra1, palavra2){
    palavra1 = palavra1.replace(/\s+/g, '').toLowerCase();
    palavra2 = palavra2.replace(/\s+/g, '').toLowerCase();

    if(palavra1.length !== palavra2.length){
        return false
    }
    else if(palavra1.split('').sort().join('') === palavra2.split('').sort().join('')){
        return true
    }
    else if(palavra1.split('').sort().join('') !== palavra2.split('').sort().join('')){
        return false
    }
}

console.log(checarAnagrama("amor", "maro")); // true
console.log(checarAnagrama("gato", "roto")); // false
