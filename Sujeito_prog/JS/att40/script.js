//Crie uma função que recebe um array de strings e retorna um novo array contendo apenas as palavras que têm mais de 5 caracteres.

let palavras = ["Casa", "Leonardo", "Hotel", "Volei", "GoiasEc"]

function palvrasCinco(palavras){
  let busca = palavras.filter((item) =>{
    return item.length > 5
  })

  console.log(busca)
}

palvrasCinco(palavras)