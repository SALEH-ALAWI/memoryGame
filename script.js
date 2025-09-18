console.log("JS working")

//DOM elemnts
const cards = document.querySelectorAll(".card")
const scoreDisplay = document.getElementById("score")
const resetBtn = document.getElementById("resetBtn")

// the variables of  game
let cardFlipped = false
let cardOne, cardTwo
let lockBoard = false
let score = 0

const shuffleCards = () => {
  // shuffle cards function
  const container = document.querySelector(".cards")
  const cardArray = Array.from(container.children)

  cardArray.forEach((_, i) => {
    // make shuffle for all the cards
    const j = Math.floor(Math.random() * (i + 1))
    ;[cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]]
  })

  cardArray.forEach((card) => container.appendChild(card))
} // this function shuffles the cards

const flipCard = (card) => {
  // here for only flip cards
  if (lockBoard || card.classList.contains("flip")) return

  card.classList.add("flip")

  if (!cardOne) {
    cardOne = card
    return
  }

  cardTwo = card
  checkForMatch()
} // check the cards and

const checkForMatch = () => {
  const Match =
    cardOne.querySelector("img").src === cardTwo.querySelector("img").src

  Match ? disableCards() : unflipCards()
} // This for the cards if they are match or not

const disableCards = () => {
  score++ // increase scores
  scoreDisplay.textContent = score
  cardOne.removeEventListener("click", () => flipCard(cardOne))
  cardTwo.removeEventListener("click", () => flipCard(cardTwo))
  resetBoard()
} // cant flip matching cards

const unflipCards = () => {
  // removing both flip cards
  lockBoard = true
  setTimeout(() => {
    cardOne.classList.remove("flip")
    cardTwo.classList.remove("flip")
    resetBoard()
  }, 900) // delay after flip  the card 0.8 sec and increase the difficulty of memorizing cards
}

const resetBoard = () => {
  ;[cardOne, cardTwo] = [null, null]
  ;[lockBoard] = [false]
} // here u can flip a lot of cards

const resetGame = () => {
  score = 0
  scoreDisplay.textContent = score
  cards.forEach((card) => {
    card.classList.remove("flip")
    card.addEventListener("click", () => flipCard(card))
  })
  shuffleCards()
} // resets the scores and remove all the the cards who flipped and shuffle the cards again

cards.forEach((card) => {
  card.addEventListener("click", () => flipCard(card))
}) // adding click event to all cards

resetBtn.addEventListener("click", resetGame) //adding click event to resetGame
