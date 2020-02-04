import fetchData from './modules/data.js'
import render from './modules/renderGame.js'
import generateQuestionsAndAnswers from './modules/playRound.js'


fetchData()
    .then(data => renderGame(data))
    .catch(error => console.log(error))


function renderGame(data) {
    let div = document.createElement('div')
    document.querySelector('body').insertAdjacentElement('afterbegin', div)
    div.className = "game"

    render.createCards(data)
    generateQuestionsAndAnswers(data)

    playGame(data)
}


function playGame(data) {
    document.querySelectorAll('.answers div').forEach(card => {
        card.addEventListener('click', function () {
            checkAnswers(this, data)
        })
    })
}


function checkAnswers(answer, data) {
    console.log(answer)
    generateQuestionsAndAnswers(data)
}