import { pickTrivia, randomObjectFromArray } from './helperFunctions.js'

export default function fillCards(data) {
    let cards = randomizeCards()
    let trivia = pickTrivia(data)[0]

    let question = trivia.question
    document.querySelector('.question p').innerHTML = question

    let correctAnswer = trivia.correct_answer
    cards[0].querySelector('p').innerHTML = correctAnswer

    let wrongAnswers = trivia.incorrect_answers
    for (let i = 0; i < cards[1].length; i++) {
        cards[1][i].querySelector('p').innerHTML = wrongAnswers[i]
    }
}

function randomizeCards() {
    let answerCards = document.querySelectorAll('.answers div')

    let correctAnswerCard = randomObjectFromArray(answerCards)
    correctAnswerCard.setAttribute('data-answer', true)

    let wrongAnswerCards = document.querySelectorAll('.answers div:not([data-answer="true"])')
    wrongAnswerCards.forEach(card => card.setAttribute('data-answer', false))

    // Console.log for overview of the answers
    answerCards.forEach((card, i) => {
        console.log("Kaart", i, ":", card)
    })

    return [correctAnswerCard, wrongAnswerCards]
}