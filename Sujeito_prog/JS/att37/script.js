// Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?

const products = [
    { name: 'Maçã', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

let busca = products.filter((item) =>{
    return item.price < 8;
})

console.log(busca)
