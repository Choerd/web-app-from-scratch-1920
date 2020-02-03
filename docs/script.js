import fetchData from './modules/data.js'

fetchData()
    .then(data => pickRandomQuestion(data))
    .catch(error => console.log(error))

function pickRandomQuestion(data) {
    data = data.filter((d, i) => i != generateRandomNumber(data))
    console.log(data)
    assignValuesToCards(data[generateRandomNumber(data)])
}

//TODO: Write first time render function

function assignValuesToCards(trivia) {
    document.querySelector('.question').insertAdjacentHTML('afterbegin', '<p>' + trivia.question + '</p>')

    let answerCards = document.querySelectorAll('.answers div')
    let correctAnswerCard = generateRandomNumber(answerCards)

    answerCards.forEach(card => {
        if (card == answerCards[correctAnswerCard]) {
            card.className = "true"
            card.insertAdjacentHTML('afterbegin', '<p>' + trivia.correct_answer + '</p>')
        } else {
            card.className = "false"
            console.log(card)
            console.log(trivia.incorrect_answers)
        }
    })
}

function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length))
}