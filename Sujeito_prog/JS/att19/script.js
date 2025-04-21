//Crie um objeto pessoa com nome, idade e profissão.

let pessoa = {
    nome: "Leonardo",
    idade: 17,
    profissão: "N/A"
};

console.log(pessoa);

console.log("----------------------------------------");

//Crie uma função que receba um objeto aluno com notas e retorne a média.

let aluno = {
    nome: "Leonardo",
    nota1: 9,
    nota2: 10
};

function media(aluno){
   let result = (aluno.nota1 + aluno.nota2) / 2

    if(result >= 6){
        console.log("Acima da média")
    }
    else{
        console.log("Abaixo da média")
    }

    return result
}


console.log(`A média do aluno ${aluno.nome} é ${media(aluno)}`)

console.log("-------------------------------------")

//Crie um array de objetos livros com título, autor e ano. Filtre os livros lançados depois de 2010.

let livros = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: 1954   
    },
    {
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        ano: 2012
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899
    },
    {
        titulo: "Livro 4",
        autor: "Leonardo",
        ano: 2020
    },
]

let filtro = livros.filter((item) => {
    if(item.ano >= 2010){
        console.log(item); // se quiser ver os que passaram
        return true;       // diz que esse item deve ir pro array filtrado
    }
    return false;          // opcional, mas bom deixar explícito
});

console.log(filtro);



