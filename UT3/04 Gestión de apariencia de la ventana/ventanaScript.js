let info = document.getElementById("info");

// Función que muestra las dimensiones actuales de la pantalla
function mostrarViewport() {
    info.textContent = "Ancho: "+window.innerWidth+" | Alto: "+window.innerHeight;
}

// Función que muestra lo posición Y del scroll 
function mostrarScroll() {
    info.textContent = "Posición del scroll: "+window.scrollY
}

// Función que mueve la scroll bar a Y 300
function bajar() {
    window.scrollTo({top: window.scrollY+300, left: 0, behavior: "smooth"});
}

function arriba() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
}

function imprimir() {
    window.print();
}