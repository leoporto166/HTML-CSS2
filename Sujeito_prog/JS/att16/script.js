// FIND = BUSCAR ALGO EM UM ARRAY
let listagem = [5, 3, "Leonardo", 2, "Kaua", "Leonardo"];

let busca = listagem.find((item, index) =>{
//CONDIÇÃO
    return item === "Leonardo"
})

console.log(busca)

//FILTER = FILTRAR

let palavras = ["Leonardo", "Ana", "Ricardo Silva", "Leonardo Porto", "Jose"]

let resultado = palavras.filter((item) =>{
    return item.length <= 4;
})

console.log(resultado)
