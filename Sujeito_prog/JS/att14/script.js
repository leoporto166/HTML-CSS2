//REST OPERATOR

function convidados(...nomes){
    console.log("SEJAM BEM VINDOS");
    console.log(nomes)
} 
convidados("Matheus", "Lucas", "Leonardo");

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length)

    console.log(`O nuemro gerado foi ${numeros[numeroGerado]}`)


}

sorteador(13, 16, 22, 24, 15, 18, 10, 19, 78, 100)