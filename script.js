console.log("JS working")
const cards = document.querySelectorAll(".card")
const scoreDisplay = document.getElementById("score")
const resetBtn = document.getElementById("resetBtn")
let cardFlipped = false
let cardOne, cardTwo
let lockBoard = false
let score = 0
