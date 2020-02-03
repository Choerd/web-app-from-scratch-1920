import fetchData from './modules/data.js'

fetchData()
    .then(data => pickRandomQuestion(data))
    .catch(error => console.log(error))

function pickRandomQuestion(data) {
    let randomQuestionIndex = Math.floor(Math.random() * Math.floor(data.length))
    let randomQuestion = data[Math.floor(Math.random() * Math.floor(data.length))]

    data = data.filter((d, i) => i != randomQuestionIndex)

    console.log(randomQuestionIndex)
    console.log(randomQuestion.question)

    document.querySelector('.question p').textContent = randomQuestion.question
}