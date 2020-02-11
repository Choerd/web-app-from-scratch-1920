export function resultContainer(answer) {
    let div = document.createElement('div')

    div.appendChild(questionElement(answer.question))
    answerElement([answer.correctAnswer, answer.wrongAnswers]).forEach(answer => {
        div.appendChild(answer)
    })

    return div
}

function questionElement(question) {
    let p = document.createElement('p')
    p.textContent = question
    p.className = "answer-question"

    return p
}

function answerElement(answer) {
    let allAnswers = shuffleArray(answer.flat(2))

    return allAnswers.map(answer => {
        let p = document.createElement('p')
        p.textContent = answer
        p.className = "answer"

        return p
    })
}

// extra function
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}