export function resultContainer(data) {
    let userData = data[0]
    let wikipediaData = data[1]

    let div = document.createElement('div')

    div.appendChild(questionElement([userData.question, wikipediaData]))
    answerElement([userData.correctAnswer, userData.wrongAnswers, userData.userAnswer]).forEach(answer => {
        div.appendChild(answer)
    })

    return div
}

function questionElement(data) {
    let a = document.createElement('a')
    a.textContent = data[0]

    if (data[1][Object.keys(data[1])].pageid != undefined) {
        a.href = "#" + data[1][Object.keys(data[1])].pageid
        a.className = 'wikipediaExists'
    }
    a.className = a.className + " answer-question"

    return a
}

function answerElement(answer) {
    let correctAnswer = answer[0]
    let userAnswer = answer[2]
    let allAnswers = shuffleArray([answer[0], answer[1]].flat(2))
    let correctColor = getComputedStyle(document.documentElement).getPropertyValue('--correct-answer')
    let wrongColor = getComputedStyle(document.documentElement).getPropertyValue('--wrong-answer')

    return allAnswers.map(answer => {
        let p = document.createElement('p')
        p.textContent = answer
        p.className = "answer"

        if (correctAnswer === userAnswer) {
            if (correctAnswer === answer) {
                p.style.backgroundColor = correctColor
            }
        }
        if (correctAnswer != userAnswer) {
            if (correctAnswer === answer) {
                p.style.backgroundColor = correctColor
                p.className = 'answerIsGood'
            } else if (userAnswer === answer) {
                p.style.backgroundColor = wrongColor
                p.className = 'answerIsWrong'
            }
        }
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