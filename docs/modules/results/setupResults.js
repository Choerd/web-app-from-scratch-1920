import { createContainer } from '../game/createCards.js'
import { resultContainer } from './createResults.js'

export default function setupResults() {
    document.querySelector('#before-game').className = 'hide'

    document.querySelector('body').appendChild(createContainer("after-game"))
    document.querySelector('.after-game').id = "after-game"

    let savedAnswers = JSON.parse(localStorage.getItem('trivia'))
    console.log(savedAnswers)

    savedAnswers.forEach(answer => {
        // console.log(answer)
        document.querySelector('.after-game').appendChild(resultContainer(answer))
    })

    // create div for every 4 answers and question
}