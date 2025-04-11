
    var peso;
    var altura;
    var imc;

function calcular(event){
    event.preventDefault()

    peso = document.getElementById("ipeso").value
    altura = document.getElementById("ialtura").value
    result = document.getElementById("result")
    imc = peso / (altura * altura);
    imc = Number(imc.toFixed(2));


    if(imc < 17){
        result.innerHTML = `<br> Seu resultado foi: ${imc} <br> Muito abaixo do peso`
    }
    else if(imc >= 17 && imc <= 18.48){
        result.innerHTML = `<br> Seu resultado foi: ${imc} <br>  Abaixo do peso`
    }
    else if(imc >= 18.5 && imc <= 24.99){
        result.innerHTML = `<br> Seu resultado foi: ${imc} <br>  Peso normal`
    }
    else if(imc >= 25 && imc <= 29.99){
        result.innerHTML = `<br> Seu resultado foi: ${imc} <br>  Acima do peso`
    }
    else if(imc >= 30){
        result.innerHTML = `<br> Seu resultado foi: ${imc} <br>  Obesidade`
    }

    document.getElementById("ipeso").value = " "
    document.getElementById("ialtura").value = " "
}
