//Crie uma função que recebe um array de números e retorna um novo array com todos os valores multiplicados por 2.

let valores = [1, 2, 3, 4];

function mult(valores){
  let x2 = valores.map((item) =>{
    return item * 2
  })
  console.log(x2)
}

mult(valores)

