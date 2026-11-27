// ----- VARIABLES GLOBALES -----
let numerosDisponibles = [];
let ultimoNum = null;
let nuevoNum = null;
let idNum = "";
let pos = null;
const INICIO = 1;
const FIN = 90;


// Recogemos los campos HTML que utilizaremos
let ultimaBola = document.getElementById("ultimaBola");
let mensaje = document.getElementById("mensaje");

// Guardamos los valores del array numerosDisponibles
insertarNums();

// ----- FUNCIONES ----- 

/**
 * Función dibujarTablero()
 * Esta función se encarga de crear y mostrar en pantalla los números del 1 al 90, organizados en 9 filas:
 *      Fila 1:  1 al 10
 *      Fila 2:  11 al 20
 *      ...
 *      Fila 9:  81 al 90
 * Cada número se mostrará dentro de un <span> con la clase "numero", y cada fila estará dentro de un <div> con la clase "fila".
*/
function dibujarTablero() {
    // 1. Buscamos en el documento el elemento con id="tablero". Aquí es donde vamos a "pintar" todos los números.
    let tablero = document.getElementById("tablero");

    // 2. Borramos cualquier contenido anterior del tablero, por si esta función se vuelve a llamar más adelante.
    tablero.innerHTML = "";
    
    // 3. Empezamos por el número 1.
    let numeroActual = 1;
    
    // 4. Queremos crear 9 filas. Cada fila tendrá hasta 10 números.
    for (let fila = 0; fila < 10; fila++) {
        
        // Creamos un <div> para la fila y le ponemos la clase "fila"
        let divFila = document.createElement("div");
        divFila.className = "fila";
        
        // Dentro de cada fila, intentamos colocar 10 números
        for (let i = 0; i < 9; i++) {
            
            // Creamos un <span> para mostrar el número
            let spanNumero = document.createElement("span");
            
            // Le asignamos la clase "numero" (el estilo vendrá del CSS)
            spanNumero.className = "numero";
            
            // Le damos un id único, por ejemplo: "num-1", "num-2", ..., "num-90".
            // Esto será útil más adelante para cambiar el color desde JavaScript.
            spanNumero.id = "num-" + numeroActual;
            
            // El texto que verá el usuario: el propio número
            spanNumero.textContent = numeroActual;
            
            // Añadimos el <span> dentro del <div> de la fila
            divFila.appendChild(spanNumero);
            
            // Pasamos al siguiente número
            numeroActual++;
        }
        
        // Cuando terminamos de rellenar la fila, la añadimos dentro del <div id="tablero">
        tablero.appendChild(divFila);
    }
}

// Función que genera un nuevo número aleatorio que no haya salido aún (onclick del botón 'Generar número')
function generarNumero() {
    // Comprobamos si el array de números disponibles está vacío (ha terminado el juego)
    if (numerosDisponibles.length == 0) {
        let playAgain = confirm("Ya han salido todos los números. ¿Quieres jugar otra vez?");
        if (playAgain) {
            // Si el usuario quiere seguir jugando rellenamos el array de números y reinicamos el juego
            reiniciarJuego();
        } else {
            mensaje.textContent="Juego finalizado";
        }
    } else {
        console.log(numerosDisponibles);
        // Generamos y guardamos un número entre 1 y 90
        pos = posDisponibleRandom(numerosDisponibles);
        nuevoNum = numerosDisponibles[pos];

        // Eliminamos ese número de nuestro array para que ya no pueda salir más
        numerosDisponibles.splice(pos, 1);
        console.log("long=",numerosDisponibles.length);

        console.log("nuevo=",nuevoNum);
        
        // Si el valor del último número está inicializado cambiamos su estilo
        if (ultimoNum != null) {
            let idUltimoNum = "num-"+ultimoNum;
            document.getElementById(idUltimoNum).classList.remove("ultimo");
            document.getElementById(idUltimoNum).classList.add("anteriores");
        }

        // Actualizamos el estilo del tablero para el número 
        idNum = "num-"+nuevoNum;
        document.getElementById(idNum).classList.add("ultimo");

        // Mostramos el número generado por pantalla
        ultimaBola.textContent = nuevoNum;
        
        // Actualizamos el mensaje de números generados
        if ((FIN-numerosDisponibles.length) == 1) {
            mensaje.textContent = "Ha salido 1 número.";
        } else {
            mensaje.textContent = "Han salido "+(FIN-numerosDisponibles.length)+" números";
        }
        
        // Guardamos el valor del último número
        ultimoNum = nuevoNum;
    }

}

// Función que renicía el juego
function reiniciarJuego() {
    numerosDisponibles = [];
    ultimoNum = null;
    insertarNums();
    dibujarTablero();
    ultimaBola.textContent="-";
    mensaje.textContent='Pulsa "Generar número" para sacar una bola.';
}

// Función que selecciona de manera aleatoria un número de un array dado
function posDisponibleRandom(array) {
    return Math.floor(Math.random()*array.length);
}

// Función que inserta los números del 1 al 90 en el array numerosDisponibles
function insertarNums() {
    for (let i=INICIO; i<=FIN; i++) {
        numerosDisponibles.push(i);
    }
}
// Llamamos a la función dibujarTablero() una vez para que el tablero aparezca en la página cuando el usuario la carga por primera vez
dibujarTablero();
