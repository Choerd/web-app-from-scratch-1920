export default {
    createCards
}

export function createCards(data) {
    createQuestionCard()
    createAnswerCards(data)
}

export function createQuestionCard() {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = "images/quizmaster-logo.svg"
    document.querySelector('.game').appendChild(div).appendChild(img)
    div.className = "question"
}

export function createAnswerCards(data) {
    let div = document.createElement('div')
    document.querySelector('.game').appendChild(div)
    div.className = "answers"

    let answerArray = []
    answerArray.push(getTriviaQuestion(data).correct_answer)
    getTriviaQuestion(data).incorrect_answers.forEach(answer => answerArray.push(answer))

    answerArray.forEach(answer => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = "images/quizmaster-logo.svg"
        document.querySelector('.answers').appendChild(div).appendChild(img)
    })
}

function getTriviaQuestion(data) {
    return data[generateRandomNumber(data)]
}

function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length - 1))
}