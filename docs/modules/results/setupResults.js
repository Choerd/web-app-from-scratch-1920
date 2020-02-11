import { createContainer } from '../game/createCards.js'
import { resultContainer } from './createResults.js'

export default function setupResults(answers) {
    document.querySelector('body').appendChild(createContainer("after-game"))
    document.querySelector('.after-game').id = "after-game"

    answers.forEach(answer => {
        document.querySelector('.after-game').appendChild(resultContainer(answer))
    })
    return answers
}