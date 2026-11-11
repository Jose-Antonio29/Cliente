const boton=document.getElementById("botonX");
let aciertos=0;
let tiempo=10;

function moverBoton(){
    //1. Obtenemos las dimensiones de la ventana 
    const anchoVentana=window.innerWidth;
    const altoVentana=window.innerHeight;
    
    //2. Obtenemos el tamaño del botón
    const anchoBoton=boton.offsetWidth; // Ancho total del boton
    const altoBoton=boton.offsetHeight; // Altura total del boton
   
    //3. Calculamos una posicion aleatoria dentro de los limites visisbles
    const x=Math.random()*(anchoVentana-anchoBoton);
    const y=Math.random()*(altoVentana-altoBoton);
    
    //4. Aplicamos las coordenadas
    boton.style.left=x+"px";
    boton.style.top=y+"px";
}

function golpeado(){
    aciertos++;
    document.getElementById("aciertos").innerText="Aciertos:"+aciertos;
}

function actualizarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerText="Tiempo:"+tiempo;
    if(tiempo===0){
        fin();
    }
}

function fin(){
    if(tiempo<=0){
        clearInterval(intervaloTiempo);
        clearInterval(muevo);
        document.getElementById("totalAciertos").innerText="Has conseguido "+aciertos+" aciertos en total";
        document.getElementById("overlay").style.display="flex";
        document.getElementById("botonX").style.display="none";
        
    }
}

// Primer movimiento e intervalo 
moverBoton();
let muevo=setInterval(moverBoton,1000);
let intervaloTiempo=setInterval(actualizarTiempo,1000);

function iniciarJuego(){
    cerrarModal();
    
    // Reiniciar variables
    document.getElementById("botonX").style.display="flex";
    aciertos=0;
    tiempo=10;
    document.getElementById("aciertos").innerText="Aciertos:"+aciertos;
    document.getElementById("tiempo").innerText="Tiempo:"+tiempo;
    
    // Primer movimiento e intervalo 
    moverBoton();
    muevo=setInterval(moverBoton,1000);
    intervaloTiempo=setInterval(actualizarTiempo,1000);
}

// Oculta el overlay 
function cerrarModal(){
    document.getElementById("overlay").style.display="none";
}