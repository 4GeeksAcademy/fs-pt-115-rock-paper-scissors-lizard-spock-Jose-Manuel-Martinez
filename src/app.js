//write your code here
const opciones = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let usuario = 'rock'; 

let computadora = opciones[Math.floor(Math.random() * opciones.length)];

function determinarGanador(jugador, maquina) {
  const reglas = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
  };

  if (jugador === maquina) return '🤘Empate!🤘';
  if (reglas[jugador].indexOf(maquina) !== -1) return '🚀Ganaste!🚀';
  return '🫷Perdiste!🫸';
}

console.log("Elegiste:", usuario);
console.log("CPU eligió:", computadora);
console.log(determinarGanador(usuario, computadora));
