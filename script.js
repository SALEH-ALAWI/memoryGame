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
