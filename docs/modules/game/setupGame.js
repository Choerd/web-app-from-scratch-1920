import fillCards from './fillCards.js'
import * as helper from '../helperFunctions.js'
import * as build from '../buildElements.js'

export default function setupGame(data) {
    let trivia = data[Math.floor(Math.random() * Math.floor(data.length))]
    let answers = [trivia.correct_answer, trivia.incorrect_answers].flat(2)

    // Create container for game
    document.querySelector('body').appendChild(build.container('game'))
    document.querySelector('.game').id = "during-game"

    // Create question card
    document.querySelector('.game').appendChild(build.card('question'))

    // Create answer card
    document.querySelector('.game').appendChild(build.container("answers"))
    answers.forEach(answer => document.querySelector('.answers').appendChild(build.card("answer")))

    localStorage.clear()

    // Create empty array to save all the answers
    window.localStorage.setItem('trivia', JSON.stringify([]))

    console.log(trivia)
    console.log(data)

    fillCards(trivia)
    return helper.popUsedQuestion(data, trivia)
}