
//MAP = PERCORRER TODO UM ARRAY

let lista = ["Leonardo", "Joao Pedro", "Kaua"];

lista.map((item, index) => {
    console.log(`Passando: ${item} - Esta na posição ${index}`)
})

//REDUCE = BUSCA REDUZIR UM ARRAY

let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - Total ate o momento`);
    console.log(`${numero} - Valor total`);
    console.log(`${indice} - Posição atual`);
    console.log(`${original} - Array original`);

    return acumulador += numero;
})