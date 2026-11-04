let casillas = document.querySelectorAll(".casilla")
let posicionTopo = -1; // Posición anterior del topo
let temporizadorTopo;

function iniciarJuego() {
    // Vaciar todas las casillas
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].innerHTML = "";
    }
    
    posicionTopo = -1;
        
    pintarTopo(); 
}


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

        
        // Mostrar el topo 
        casillas[posicionTopo].textContent = "🐹";

        // Generar un timepo aleatorio entre 500 y 1000
        let intervalo = Math.floor(Math.random()*501)+500;

        // Programar el siguiente movimiento del topo
        temporizadorTopo = setTimeout(pintarTopo, intervalo);

}