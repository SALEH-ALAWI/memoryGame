console.log("JS working")
const cards = document.querySelectorAll(".card")
const scoreDisplay = document.getElementById("score")
const resetBtn = document.getElementById("resetBtn")
let cardFlipped = false
let cardOne, cardTwo
let lockBoard = false
let score = 0

const shuffleCards = () => {
  const container = document.querySelector(".cards")
  const cardArray = Array.from(container.children)

  cardArray.forEach((_, i) => {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]]
  })

  cardArray.forEach((card) => container.appendChild(card))
}

const checkForMatch = () => {
  const Match =
    cardOne.querySelector("img").src === cardTwo.querySelector("img").src

  Match ? disableCards() : unflipCards()
}

const disableCards = () => {
  score++
  scoreDisplay.textContent = score
  cardOne.removeEventListener("click", () => flipCard(cardOne))
  cardTwo.removeEventListener("click", () => flipCard(cardTwo))
  resetBoard()
}

const unflipCards = () => {
  lockBoard = true
  setTimeout(() => {
    cardOne.classList.remove("flip")
    cardTwo.classList.remove("flip")
    resetBoard()
  }, 900)
}

const resetBoard = () => {
  ;[cardOne, cardTwo] = [null, null]
  ;[lockBoard] = [false]
}

const resetGame = () => {
  score = 0
  scoreDisplay.textContent = score
  cards.forEach((card) => {
    card.classList.remove("flip")
    card.addEventListener("click", () => flipCard(card))
  })
  shuffleCards()
}

cards.forEach((card) => {
  // adding click event to all cards
  card.addEventListener("click", () => flipCard(card))
})

resetBtn.addEventListener("click", resetGame)
