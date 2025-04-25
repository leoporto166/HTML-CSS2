// Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

let numeros = [-3, -2, -1, 0 , 1, 2, 3];

function VerificadorNumero(numeros){
    let verif = numeros.map((item) => {
        if(item < 0){
            return "NEGATIVO"
        }
        else if(item === 0){
            return "ZERO"
        }
        else{
            return "POSITIVO"
        }
    })

    console.log(verif)
}

VerificadorNumero(numeros)
