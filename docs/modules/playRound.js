import fillCards from './fillCards.js'
import { popUsedQuestion } from './helperFunctions.js'

let changedData
export default function playRound(data) {
    changedData = data
    document.querySelectorAll('.answers div').forEach(card => {
        card.addEventListener('click', function () {

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
