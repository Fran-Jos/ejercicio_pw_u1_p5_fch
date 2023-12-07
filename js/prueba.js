
var total = 0; 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mostrar(boton) {
    var num = getRandomInt(100);

  
    total += num;

    document.getElementById("idresul").textContent = "Total: " + total;

    boton.textContent =  num;
}