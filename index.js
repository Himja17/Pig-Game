const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const holdNum = document.querySelector(".btn--hold");
const currScore0 = document.getElementById("current--0");
const currScore1 = document.getElementById("current--1");

score0.textContent = 0;
score1.textContent = 0;
let currScore = 0;
let activePlayer = 0;
let bigScore = [0, 0];

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
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNum);

  diceImg.classList.remove("hidden");
  diceImg.src = `/assets/dice-${randomNum}.png`;

  if (randomNum !== 1) {
    currScore = currScore + randomNum;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
  } else {
    switchPlayer();
  }
});

holdNum.addEventListener("click", function () {
  // Add the current score to the score0/score1 depending on active player
  bigScore[activePlayer] = bigScore[activePlayer] + currScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    bigScore[activePlayer];
    switchPlayer();
    

});
