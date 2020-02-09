import { randomObjectFromArray } from './helperFunctions.js'

export default function fillCards(data) {
    console.log(data)
    let cards = randomizeCards()
    let trivia = data[1][Math.floor(Math.random() * Math.floor(data[1].length))]

    let question = trivia.question
    document.querySelector('.question p').innerHTML = question

    let correctAnswer = trivia.correct_answer
    cards[0].querySelector('p').innerHTML = correctAnswer

    let wrongAnswers = trivia.incorrect_answers
    for (let i = 0; i < cards[1].length; i++) {
        cards[1][i].querySelector('p').innerHTML = wrongAnswers[i]
    }

    let newData = data[1].filter(d => d != data[0])

    return [trivia, newData]
}

function randomizeCards() {
    let answerCards = document.querySelectorAll('.answers div')

    answerCards.forEach(card => {
        if (card.getAttribute('data-answer') != null) {
            card.removeAttribute('data-answer')
        }
    })

    let correctAnswerCard = randomObjectFromArray(answerCards)
    correctAnswerCard.setAttribute('data-answer', true)

    let wrongAnswerCards = document.querySelectorAll('.answers div:not([data-answer="true"])')
    wrongAnswerCards.forEach(card => card.setAttribute('data-answer', false))

    // Console.log for overview of the answers
    answerCards.forEach((card, i) => {
        console.log("Kaart", i + 1, ":", card)
    })

    return [correctAnswerCard, wrongAnswerCards]
}