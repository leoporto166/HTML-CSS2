//Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:

const products = [
    { name: 'Maçã', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

let busca = products.filter((item) => {
    return item.price === 20;
})

console.log(busca)


