export default function generateQuestionsAndAnswers(data) {
    let trivia = data[generateRandomNumber(data)]
    data = data.filter((d, i) => d != trivia)

    let answerCards = document.querySelectorAll('.answers > div')
    answerCards.forEach(card => {
        card.classList.remove('true')
        card.classList.remove('false')
    })

    answerCards[generateRandomNumber(answerCards)].className = "true"

    document.querySelector('.question p').innerHTML = trivia.question
    document.querySelector('.answers .true p').innerHTML = trivia.correct_answer

    let wrongAnswerCards = document.querySelectorAll('.answers div:not(.true)')
    for (let i = 0; i < trivia.incorrect_answers.length; i++) {
        wrongAnswerCards[i].querySelector('p').innerHTML = trivia.incorrect_answers[i]
        wrongAnswerCards[i].className = "false"
    }
}

function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length))
}
