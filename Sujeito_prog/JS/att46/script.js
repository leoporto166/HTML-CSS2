/*Crie uma função que receba um array de objetos representando produtos
(cada produto tem nome, preco e categoria)
e retorne um objeto onde as chaves são os nomes das categorias
e os valores são arrays com os produtos daquela categoria.*/

let produtos = [
    { nome: "Camiseta", preco: 29.99, categoria: "Roupas" },
    { nome: "Calça", preco: 79.99, categoria: "Roupas" },
    { nome: "Notebook", preco: 2499.99, categoria: "Eletronicos" }
]

const separados = {
    Roupas: [],
    Eletronicos: []
}

produtos.forEach(produto => {
    if(produto.categoria === "Roupas"){
        separados.Roupas.push(produto);
    } else if(produto.categoria === "Eletronicos"){
        separados.Eletronicos.push(produto);
    }
})

console.log(separados)