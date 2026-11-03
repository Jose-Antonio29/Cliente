let casillas = document.querySelectorAll(".casilla")

function iniciarJuego() {
    // Vaciar todas las casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].innerHTML = "";
    }

    // Inicamos la cuenta atrás
    setInterval(pintarTopo, 1000);
}


function pintarTopo() {
    // Elegir una casilla aleatoria
    let pos = Math.floor(Math.random()*9);
    
    // Mostrar el topo 
    casillas[pos].innerHTML = "🐹"
}