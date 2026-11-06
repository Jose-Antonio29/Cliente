// Obtener las casillas del tablero
let casillas = document.querySelectorAll(".casilla")

// Variables del juego
let posicionTopo = -1; // Posición anterior del topo
let aciertos = 0;
let golpeado = false;
let jugando = false;
let record = Number(localStorage.getItem("record")) || 0;

// Mostramos el record en pantalla
document.getElementById("record").innerText = record;

// Temporizadores
let tiempo = 15;
let temporizadorTopo;
let temporizadorTiempo;

// Iniciar una nueva partida
function iniciarJuego() {
    // Detener temporizadores anteriores
    clearInterval(temporizadorTiempo);
    clearInterval(temporizadorTopo);
    
    // Reiniciar varaibles
    tiempo = 15;
    posicionTopo = -1;
    aciertos = 0;
    golpeado = false;
    jugando = true;

    // Actualizar marcadores
    document.getElementById("aciertos").innerText = aciertos;
    document.getElementById("tiempo"). innerText = tiempo;
    document.getElementById("mensaje").innerText = "";
    
    // Mostrar el primer topo
    pintarTopo(); 

    // Iniciar el contador de tiempo
    temporizadorTiempo = setInterval(actualizarTiempo, 1000);
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
    if (jugando && posicion == posicionTopo && !golpeado) {
        aciertos++;
        golpeado = true;
        document.getElementById("aciertos").innerText = aciertos;
    }
}

// Actualizar el timepo restante
function actualizarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerText = tiempo;

    if (tiempo == 0) {
        finalizarJuego();
    }
}

// Finalizar la partida
function finalizarJuego() {
    jugando = false;

    // Detener los temporizadores
    clearInterval(temporizadorTiempo);
    clearTimeout(temporizadorTopo);

    // Ocultar el topo
    casillas[posicionTopo].innerHTML = "";
    posicionTopo = -1;

    // Establecer el record según el número de aciertos
    if (aciertos > record) {
        record = aciertos;
        
        // Guardar el nuevo récord
        localStorage.setItem("record", record);

        // Actualizar el maracador del récord
        document.getElementById("record").innerText = record
    }

    // Mostrar mensaje final
    document.getElementById("mensaje").innerText =
        "¡Tiempo terminado! Has conseguido "+aciertos+" aciertos.";
}