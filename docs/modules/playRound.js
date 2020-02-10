import fillCards from './fillCards.js'
import { popUsedQuestion } from './helperFunctions.js'

let changedData // Global varible to update the data on user input

export default function playRound(data) {
    changedData = data
    document.querySelectorAll('.answers div').forEach(card => {
        card.addEventListener('click', function () {

            // Write function that checks if the answer is correct or wrong and changes background color to green or red
            saveTriviaData(this)
            changedData = rerenderCards()

        })
    })
}

function saveTriviaData(user) {
    let question = document.querySelector('.question p').textContent
    let correctAnswer = document.querySelector('.answers div[data-answer="true"]').textContent
    let wrongAnswers = []

    document.querySelectorAll('.answers div:not([data-answer="true"])').forEach(answer => {
        wrongAnswers.push(answer.textContent)
    })

    let savedAnswers = JSON.parse(localStorage.getItem('trivia'))
    savedAnswers.push({
        userAnswer: user.querySelector('p').textContent,
        question: question,
        correctAnswer: correctAnswer,
        wrongAnswers: wrongAnswers
    })
    localStorage.setItem('trivia', JSON.stringify(savedAnswers))

    console.log("Saved data", savedAnswers)
}

function rerenderCards() {
    let newTrivia = changedData[Math.floor(Math.random() * Math.floor(changedData.length))]

    console.log(newTrivia)
    console.log(changedData)

    if (changedData.length != 0) {
        fillCards(newTrivia)
    } else {
        document.querySelector('.game').className = "hide"
    }

    return popUsedQuestion(changedData, newTrivia)
}
