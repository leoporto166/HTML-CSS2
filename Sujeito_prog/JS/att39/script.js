//Encontrar o Primeiro Produto Acima de R$15

const products = [
    { name: 'Maça',     price: 2.5 },
    { name: 'Coca cola',price: 8   },
    { name: 'Guarana',  price: 5   },
    { name: 'Chocolate',price: 20  }
  ];

let buscaSimples = products.find((item) =>{
    return item.price > 15;
})

console.log(buscaSimples)