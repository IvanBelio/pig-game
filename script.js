const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

// const btnHold = document.getElementsByClassName('btn--hold')[0]

let currentScore, scores, activePlayer

const init = function () {
  currentScore = 0
  activePlayer = 0
  scores = [0, 0]
  // diceEl.classList.add('hidden')
  diceEl.style.display = 'none'
  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
}

init()

console.log(btnNew, btnRoll, btnHold)

btnRoll.addEventListener('click', () => {
  // sacas un número del 1 al 6
  const dice = Math.trunc(Math.random() * 6) + 1

  // mostrar el dado
  diceEl.style.display = 'block'
  diceEl.src = `dice-${dice}.png`

  if (dice === 1) {
    switchtPlayer()
  } else {
    // sumar el dado al current score
    currentScore += dice
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore
  }
})

btnNew.addEventListener('click', () => {
  console.log('New game')
})

btnHold.addEventListener('click', () => {
  // Añadir currentScore al totalScore del jugador activo
  scores[activePlayer] += currentScore
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
  // Vemos si finaliza la partida o cambiamos de jugador
  if (scores[activePlayer] > 100) {
    // Termina el juego
    diceEl.style.display = 'none'
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner')
      .classList.add('player--active')
  } else {
    // Cambiamos de jugador
    switchtPlayer()
  }
})

function switchtPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  // Cambiar de jugador
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}