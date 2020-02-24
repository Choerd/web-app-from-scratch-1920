import { createContainer } from '../game/createCards.js'
import { resultContainer } from './createResults.js'

export default function renderScoreboard(answers) {
    if (JSON.parse(localStorage.getItem('wikipedia')) == null) {
        console.log('Data from fetching')
        api.fetchWikipediaData(answers)
            .then(data => {
                console.log(data)
                localStorage.setItem('wikipedia', JSON.stringify(data))
                return data
            })
            .then(data => setupResults([JSON.parse(localStorage.getItem('trivia')), data]))
    } else {
        console.log('Data from LocalStorage')
        setupResults([JSON.parse(localStorage.getItem('trivia')), JSON.parse(localStorage.getItem('wikipedia'))])
    }
}

function setupResults(answers) {
    document.querySelector('body').appendChild(createContainer("after-game"))
    document.querySelector('.after-game').id = "after-game"

    for (var i = 0; i < answers[0].length; i++) {
        document.querySelector('.after-game').appendChild(resultContainer([answers[0][i], answers[1][i]]))
    }
    return answers
}