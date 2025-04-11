//setInterval

function acao(){
    
    document.write("Executando.... <br>");
}

var timer = setInterval(acao, 1000);


//setTimeout

function out(){
   document.write("Timeout... <br>");
}

setTimeout(out, 5000);
