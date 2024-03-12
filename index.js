const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const holdNum = document.querySelector(".btn--hold");
const currScore0 = document.getElementById("current--0");
const currScore1 = document.getElementById("current--1");
const newGame = document.querySelector(".btn--new");

let currScore, activePlayer, bigScore, playing;

const initialValue = function () {
  currScore = 0;
  activePlayer = 0;
  bigScore = [0, 0];
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;

  diceImg.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};
initialValue();

// Hiding dice image at first
diceImg.classList.add("hidden");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// ROLL DICE
btnRoll.addEventListener("click", function () {
  if (playing) {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNum);

    //   Show the dice
    diceImg.classList.remove("hidden");
    diceImg.src = `/assets/dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});

// HOLD SCORE
holdNum.addEventListener("click", function () {
  // Add the current score to the score0/score1 depending on active player
  if (playing) {
    bigScore[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      bigScore[activePlayer];

    if (bigScore[activePlayer] >= 100) {
      diceImg.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// NEW GAME RESET
newGame.addEventListener("click", initialValue);
