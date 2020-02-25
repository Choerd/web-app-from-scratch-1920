import * as build from '../buildElements.js'
import * as api from '../data.js'

export default function renderScoreboard(answers) {
    if (JSON.parse(localStorage.getItem('wikipedia')) == null) {
        console.log('Data from fetching')
        api.fetchWikipediaData(answers)
            .then(data => {
                console.log(data)
                localStorage.setItem('wikipedia', JSON.stringify(data))
                return data
            })
            .then(data => createResults([JSON.parse(localStorage.getItem('trivia')), data]))
    } else {
        console.log('Data from LocalStorage')
        createResults([JSON.parse(localStorage.getItem('trivia')), JSON.parse(localStorage.getItem('wikipedia'))])
    }
}

function createResults(answers) {
    reduceExample(JSON.parse(localStorage.getItem('trivia')))

    document.querySelector('body').appendChild(build.container("after-game"))
    document.querySelector('.after-game').id = "after-game"

    document.querySelector('.after-game').appendChild(build.container('scoreboard'))
    for (let i = 0; i < answers[0].length; i++) {
        document.querySelector('.scoreboard').appendChild(build.container('result'))

        document.querySelectorAll('.result')[i].appendChild(build.resultQuestion([answers[0][i], answers[1][i]]))
        build.resultAnswer(answers[0][i]).forEach(answer => document.querySelectorAll('.result')[i].appendChild(answer))
    }
    return answers
}

// Example of using the reduce function
function reduceExample(array) {
    const trueFalseArray = answerTrueOrFalse(array)
    console.log("You've got", trueFalseArray.reduce((index, result) => index + (result === true), 0), "correct answers")
}

function answerTrueOrFalse(array) {
    return array.map(trivia => {
        if (trivia.userAnswer === trivia.correctAnswer) {
            return true
        } else {
            return false
        }
    })
}