import fillCards from './fillCards.js'
import { popUsedQuestion } from './helperFunctions.js'


export default function playRound(data) {
    document.querySelectorAll('.answers div').forEach(card => {
        card.addEventListener('click', function () {

            saveTriviaData(this)

            test(data)

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

function test(data) {
    // TODO: Steps
    // Remove the trivia from the array
    // Rerender with a new trivia

    let trivia = data[Math.floor(Math.random() * Math.floor(data.length))]

    fillCards(trivia)

    console.log(trivia)
    console.log(data)
    data = popUsedQuestion(data, trivia) // remove from array
}
