import fillCards from './fillCards.js'
import { popUsedQuestion } from '../helperFunctions.js'

let changedData // Global varible to update the data on user input

export default function playRound(data) {
    changedData = data
    document.querySelectorAll('.answers div').forEach(card => {
        card.addEventListener('click', function () {

            checkAnswer(this)
            saveTriviaData(this)

            document.querySelectorAll('.answers div').forEach(element => element.style.pointerEvents = "none")

            setTimeout(function () {
                document.querySelectorAll('.answers div').forEach(element => element.style.pointerEvents = "auto")
                document.documentElement.style.setProperty('--main-color', '')
                changedData = rerenderCards()
            }, 400)
        })
    })
}

function checkAnswer(answer) {
    const correctAnswer = document.querySelector('.answers div[data-answer="true"]').textContent
    const userAnswer = answer.querySelector('p').textContent

    const correctColor = getComputedStyle(document.documentElement).getPropertyValue('--correct-answer')
    const wrongColor = getComputedStyle(document.documentElement).getPropertyValue('--wrong-answer')

    if (correctAnswer == userAnswer) {
        document.documentElement.style.setProperty('--main-color', correctColor);
    } else {
        document.documentElement.style.setProperty('--main-color', wrongColor);
    }
}

function saveTriviaData(user) {
    const question = document.querySelector('.question p').textContent
    const correctAnswer = document.querySelector('.answers div[data-answer="true"]').textContent
    const wrongAnswers = []

    document.querySelectorAll('.answers div:not([data-answer="true"])').forEach(answer => {
        wrongAnswers.push(answer.textContent)
    })

    const savedAnswers = JSON.parse(localStorage.getItem('trivia'))
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
    const newTrivia = changedData[Math.floor(Math.random() * Math.floor(changedData.length))]

    if (changedData.length != 0) {
        fillCards(newTrivia)

        console.log(newTrivia)
        console.log(changedData)
    } else {
        gameOver()
    }

    return popUsedQuestion(changedData, newTrivia)
}

function gameOver() {
    document.querySelector('.game').className = "hide"
    document.querySelector('.enter-results').classList.remove("hide")
}