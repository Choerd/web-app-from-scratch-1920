import { createContainer } from '../game/createCards.js'
import { resultContainer } from './createResults.js'

export default function setupResults(answers) {
    document.querySelector('body').appendChild(createContainer("after-game"))
    document.querySelector('.after-game').id = "after-game"

    for (var i = 0; i < answers[0].length; i++) {
        document.querySelector('.after-game').appendChild(resultContainer([answers[0][i], answers[1][i]]))
    }
    return answers
}