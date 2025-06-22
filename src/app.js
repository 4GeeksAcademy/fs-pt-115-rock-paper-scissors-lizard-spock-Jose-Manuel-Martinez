//write your code here
// --- CONSTANTES Y VARIABLES GLOBALES ---
const opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
const PIEDRA = 0, PAPEL = 1, TIJERA = 2, LAGARTO = 3, SPOCK = 4;

// --- SELECCIÓN DE ELEMENTOS DEL DOM ---
// Botones de accion y los guardo en una lista.
const botonesOpcion = document.querySelectorAll('.boton-opcion'); 
const zonaResultados = document.getElementById('zona-resultados');
const textoEleccionJugador = document.getElementById('texto-eleccion-jugador');
const textoEleccionMaquina = document.getElementById('texto-eleccion-maquina');
const textoResultadoFinal = document.getElementById('texto-resultado-final');
const botonReiniciar = document.getElementById('boton-reiniciar');
const contenedorOpciones = document.getElementById('opciones-jugador');

// --- FUNCIONES ---

// generar un número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// La función principal del juego 
function jugar(opcionUsuario) {
// Oculto los botones de opción para que no se pueda volver a jugar
    contenedorOpciones.style.display = 'none';

 //  elección de la máquina
    const opcionMaquina = aleatorio(0, 4);

 //  elecciones en pantalla
    textoEleccionJugador.textContent = `Elegiste: ${opciones[opcionUsuario]}`;
    textoEleccionMaquina.textContent = `La máquina eligió: ${opciones[opcionMaquina]}`;

    // Comparo y determino el resultado
    // Reutilizo la misma lógica if-else, pero en lugar de 'alert',
    // llamo a una función que muestra el resultado en la página.
    if (opcionUsuario == opcionMaquina) {
        mostrarResultado("¡Empate!", "empate");
    } else if (
        (opcionUsuario == PIEDRA && (opcionMaquina == TIJERA || opcionMaquina == LAGARTO)) ||
        (opcionUsuario == PAPEL && (opcionMaquina == PIEDRA || opcionMaquina == SPOCK)) ||
        (opcionUsuario == TIJERA && (opcionMaquina == PAPEL || opcionMaquina == LAGARTO)) ||
        (opcionUsuario == LAGARTO && (opcionMaquina == PAPEL || opcionMaquina == SPOCK)) ||
        (opcionUsuario == SPOCK && (opcionMaquina == TIJERA || opcionMaquina == PIEDRA))
    ) {
        mostrarResultado("¡Ganaste!", "ganaste");
    } else {
        mostrarResultado("¡Perdiste!", "perdiste");
    }
}

// Función para mostrar los resultados en el DOM
function mostrarResultado(mensaje, claseCss) {
    textoResultadoFinal.textContent = mensaje;
    textoResultadoFinal.className = claseCss; 
    zonaResultados.style.display = 'block'; // Muestra la sección de resultados
}

// Función con la que se puede reiniciar el juego
function reiniciarJuego() {
    zonaResultados.style.display = 'none'; // Oculta resultados
    contenedorOpciones.style.display = 'flex'; // Muestra de nuevo los botones de opción
}

// --- EVENT LISTENERS 

// cada boton de opcion 
botonesOpcion.forEach(boton => {
    boton.addEventListener('click', (evento) => {
        // Opción del atributo 'data-opcion' que he definido en el HTML
        const opcionElegida = parseInt(evento.target.getAttribute('data-opcion'));
        jugar(opcionElegida);
    });
});

// Boton de reiniciar.
botonReiniciar.addEventListener('click', reiniciarJuego);

// Sitios utilizados para el proyecto: 
//https://es.javascript.info/dom-navigation 
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
//No me funcionaba el style.display pero aqui lo resolvieron https://forum.freecodecamp.org/t/style-display-not-working/486999/4
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll