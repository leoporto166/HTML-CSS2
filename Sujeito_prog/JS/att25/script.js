let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32, 25, 31, 90, 17];

console.log("Array original:", numeros);

let primos = numeros.filter((item) =>{
    if(item <= 1){
        return false;
    }
    for(let i = 2; i < item; i++){
        if(item % i=== 0){
            return false;
        }
    }

    return true;
})

console.log("Números primos:", primos);
