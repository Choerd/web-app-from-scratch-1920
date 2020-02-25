import { randomObjectFromArray, decodeEntities } from '../helperFunctions.js'

export default function fillCards(trivia) {
    const cards = randomizeCards()
    const question = trivia.question
    const correctAnswer = trivia.correct_answer
    const wrongAnswers = trivia.incorrect_answers

    document.querySelector('.question p').textContent = decodeEntities(question)
    cards[0].querySelector('p').textContent = decodeEntities(correctAnswer)
    for (let i = 0; i < cards[1].length; i++) {
        cards[1][i].querySelector('p').textContent = decodeEntities(wrongAnswers[i])
    }
}

function randomizeCards() {
    const answerCards = document.querySelectorAll('.answers div')

    answerCards.forEach(card => {
        if (card.getAttribute('data-answer') != null) {
            card.removeAttribute('data-answer')
        }
    })

    const correctAnswerCard = randomObjectFromArray(answerCards)
    correctAnswerCard.setAttribute('data-answer', true)

    const wrongAnswerCards = document.querySelectorAll('.answers div:not([data-answer="true"])')
    wrongAnswerCards.forEach(card => card.setAttribute('data-answer', false))

    answerCards.forEach((card, i) => {
        console.log("Kaart", i + 1, ":", card)
    })

    return [correctAnswerCard, wrongAnswerCards]
}