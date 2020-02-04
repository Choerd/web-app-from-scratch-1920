import fetchData from './modules/data.js'
import render from './modules/renderGame.js'

fetchData()
    .then(data => renderGame(data))
    .catch(error => console.log(error))


function renderGame(data) {
    let div = document.createElement('div')
    document.querySelector('body').insertAdjacentElement('afterbegin', div)
    div.className = "game"

    // Creates the cards
    render.createCards(data)

    // Assign values to the cards
    addQuestionsAndAnswers(data)
}

function addQuestionsAndAnswers(data) {
    let trivia = data[generateRandomNumber(data)]
    data = data.filter((d, i) => d != trivia)

    let answerCards = document.querySelectorAll('.answers > div')
    answerCards[generateRandomNumber(answerCards)].className = "true"

    document.querySelector('.question').insertAdjacentHTML('afterbegin', '<p>' + trivia.question + '</p>')
    document.querySelector('.answers .true').insertAdjacentHTML('afterbegin', '<p>' + trivia.correct_answer + '</p>')

    let wrongAnswerCards = document.querySelectorAll('.answers div:not(.true)')
    let wrongAnswers = trivia.incorrect_answers
    for (let i = 0; i < wrongAnswers.length; i++) {
        wrongAnswerCards[i].insertAdjacentHTML('afterbegin', '<p>' + wrongAnswers[i] + '</p>')
    }
    return data
}


function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length - 1))
}
