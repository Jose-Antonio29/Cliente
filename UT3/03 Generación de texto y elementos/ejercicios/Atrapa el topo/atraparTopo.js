// Obtener las casillas del tablero
let casillas = document.querySelectorAll(".casilla")

// Variables del juego
let posicionTopo = -1; // Posición anterior del topo
let aciertos = 0;
let golpeado = false;
let jugando = false;

// Temporizadores
let tiempo = 15;
let temporizadorTopo;

// Iniciar una nueva partida
function iniciarJuego() {
    // Vaciar todas las casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].innerHTML = "";
    }
    
    posicionTopo = -1;
    aciertos = 0;
    golpeado = false;

    document.getElementById("aciertos").innerText = aciertos;
        
    
    pintarTopo(); 
}

// Mostrar el topo en una casilla aleatoria
function pintarTopo() {
        // Vaciar todas las casillas
        for (let i = 0; i < casillas.length; i++) {
            casillas[i].innerHTML = "";
        }

        // Elegimos una nueva posición para el topo diferente de la anterior
        let nuevaPosicion;

        do {
            nuevaPosicion = Math.floor(Math.random()*9);
        } while (nuevaPosicion === posicionTopo);

        // Guardamos la nueva posición
        posicionTopo = nuevaPosicion;
        golpeado = false;

        
        // Mostrar el topo 
        casillas[posicionTopo].textContent = "🐹";

        // Generar un timepo aleatorio entre 500 y 1000
        let intervalo = Math.floor(Math.random()*501)+500;

        // Programar el siguiente movimiento del topo
        temporizadorTopo = setTimeout(pintarTopo, intervalo);

}

// Comprobar si el jugador ha atrapado el topo
function golpear(posicion) {
    if (posicion == posicionTopo && !golpeado) {
        aciertos++;
        golpeado = true;

        document.getElementById("aciertos").innerText = aciertos;
    }
}