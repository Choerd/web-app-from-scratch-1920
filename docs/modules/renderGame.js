export default {
    createCards
}

function createCards(data) {
    createQuestionCard()
    createAnswerCards(data)
}

function createQuestionCard() {
    let div = document.createElement('div')
    div.className = "question"
    let img = document.createElement('img')
    img.src = "images/quizmaster-logo.svg"
    let p = document.createElement('p')
    document.querySelector('.game').appendChild(div).appendChild(p)
    document.querySelector('.game').appendChild(div).appendChild(img)

}

function createAnswerCards(data) {
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
        let p = document.createElement('p')
        document.querySelector('.answers').appendChild(div).appendChild(p)
        document.querySelector('.answers').appendChild(div).appendChild(img)
    })
}

function getTriviaQuestion(data) {
    return data[generateRandomNumber(data)]
}

function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length - 1))
}