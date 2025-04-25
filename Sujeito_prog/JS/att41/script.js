//Com o array products, conte quantos itens possuem price < 10 e retorne esse número.

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

   let i = 0
let busca = products.filter((item) => {

    if(item.price < 10){
      i++
    }

 return i
})

console.log(i)


