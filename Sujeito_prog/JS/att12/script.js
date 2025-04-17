

//DESCONSTRUINDO OBJETOS

let pessoa = {
    nome: "Leonardo",
    sobrenome: "Porto",
    empresa: "JB PROGRAMADOR",
    cargo: "Chefe Programador"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

let nome = "TESTE"

const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

console.log(nomePessoa);
console.log(sobrenome);
console.log(empresa);
console.log(cargo);

let nomes = ["Leonardo", "Joao Pedro", "Kaua"];
let {0:leonardo, 2:terceiraPessoa} = nomes;

console.log(leonardo);
console.log(terceiraPessoa)

let[primeiroNome, segundoNome, terceiroNome] = nomes

console.log(segundoNome)
