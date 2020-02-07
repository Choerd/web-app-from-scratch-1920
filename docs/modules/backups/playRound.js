export default function fillCards(data) {
    let newTrivia = data[1][generateRandomNumber(data[1])]

    document.querySelector('.question p').innerHTML = newTrivia.question

    // Good answer
    let answerCards = document.querySelectorAll('.answers > div')
    answerCards.forEach(card => {
        if (card.getAttribute('data-answer') != null) {
            card.removeAttribute('data-answer')
        }
    })
    answerCards[generateRandomNumber(answerCards)].setAttribute('data-answer', true)
    document.querySelector('.answers [data-answer="true"] p').innerHTML = newTrivia.correct_answer

    // Wrong answers
    let wrongAnswerCards = document.querySelectorAll('.answers div:not([data-answer="true"])')
    for (let i = 0; i < wrongAnswerCards.length; i++) {
        wrongAnswerCards[i].setAttribute('data-answer', false)
        wrongAnswerCards[i].querySelector('p').innerHTML = newTrivia.incorrect_answers[i]
    }

    let newData = data[1].filter(d => d != data[0])
    return [newTrivia, newData]
}

function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length))
}
