export default function setupGame(data) {
    let trivia = data[generateRandomNumber(data)]
    createQuestionCard([trivia, data])
    createAnswerCards([trivia, data])
}

function createQuestionCard(data) {
    let div = document.createElement('div')
    div.className = "question"
    let img = document.createElement('img')
    img.src = "images/quizmaster-logo.svg"
    let p = document.createElement('p')
    p.innerHTML = data[0].question

    div.appendChild(img)
    div.appendChild(p)

    document.querySelector('.game').appendChild(div)
}

function createAnswerCards(data) {
    let div = document.createElement('div')
    div.className = "answers"

    let trivia = data[0]
    let answerArray = []
    answerArray.push(trivia.correct_answer)
    trivia.incorrect_answers.forEach(answer => answerArray.push(answer))

    console.log(answerArray)

    answerArray.forEach(answer => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = "images/quizmaster-logo.svg"
        let p = document.createElement('p')

        document.querySelector('.answers').appendChild(div)
        console.log(div)
    })
}

function generateRandomNumber(array) {
    return Math.floor(Math.random() * Math.floor(array.length - 1))
}