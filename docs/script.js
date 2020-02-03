import fetchData from './modules/data.js'

fetchData()
    .then(data => pickQuestion(data))
    .catch(error => console.log(error))

function pickQuestion(data) {
    let randomQuestionIndex = Math.floor(Math.random() * Math.floor(data.length))
    let randomQuestion = data[Math.floor(Math.random() * Math.floor(data.length))]

    data = data.filter((d, i) => i != randomQuestionIndex)

    console.log(randomQuestionIndex)
    console.log(randomQuestion)
    return randomQuestion
}