//Spread Operator

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 6];

console.log(numeros);

let pessoa = {
    nome:"Leonardo",
    idade: 17,
    cargo: "Pj"
};

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Goiânia"
};

console.log(novaPessoa);

function novoUsuario(info){
    console.log(info);
    let dados = {
        ...info,
        status: "ATIVO",
        inicio:"20/03/2020",
        codigo:"12345678"
    }

    console.log(dados)
}

novoUsuario({nome: "Jose", sobrenome: "Porto", cargo: "DEV"})