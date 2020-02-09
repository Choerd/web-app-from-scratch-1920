import { randomObjectFromArray, decodeEntities } from './helperFunctions.js'

export default function fillCards(trivia) {
    let cards = randomizeCards()
    let question = trivia.question
    let correctAnswer = trivia.correct_answer
    let wrongAnswers = trivia.incorrect_answers

    document.querySelector('.question p').textContent = decodeEntities(question)
    cards[0].querySelector('p').textContent = decodeEntities(correctAnswer)
    for (let i = 0; i < cards[1].length; i++) {
        cards[1][i].querySelector('p').textContent = decodeEntities(wrongAnswers[i])
    }
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