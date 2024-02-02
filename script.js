// Seleccionamos elementos del DOM
const newGameButton = document.querySelector('.btn--new')
const rollDiceButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
const current1 = document.querySelector('.current--0')
const scorePlayer1 = document.querySelector('.score--0')
const current2 = document.querySelector('.current--1')
const scorePlayer2 = document.querySelector('.score--1')

// Inicializamos la aplicacion
initApp()

// Funcion para un nuevo juego
newGameButton.addEventListener('click', function () {
    // Poner los score a 0
    // Quitar foto del dado
    // Poner que empieze el jugador 1
})
rollDiceButton.addEventListener('click', function () {
    // Sacar un número del 1 al 6
    const dice = Math.trunc(Math.random()*6) +1

    //mostrar el dado
    diceEl.src= `dice-${dice}.png`
    if (dice === 1) {
        // Pierder el turno
    } else {
        // Sumar el dado al current score
    }
})
holdButton.addEventListener('click', function () {
    // Sumar el numero del current al score del player
    // Cambiar de jugador
    // Si llega a 100, terminar el jugo
    // Si se pasa de 100, no sumar la puntuacion y cambiar de jugador
})

// Llamar a fucnión init que haga:
/*
    1. El dado por defecto es invisible
    2. Score1 y score2 a 0
    3. currentScore1 y currentScore2 a 0
    4. Cuando se hace click en el botón roll:
        4.1. El dado se pone visible
*/
const initApp = function (){

}