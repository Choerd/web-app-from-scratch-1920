import { createContainer, createQuestionCard, createAnswerCard } from './createCards.js'
import fillCards from './fillCards.js'
import { popUsedQuestion } from './helperFunctions.js'


export default function setupGame(data) {
    let trivia = data[Math.floor(Math.random() * Math.floor(data.length))]
    let answers = [trivia.correct_answer, trivia.incorrect_answers].flat(2)

    document.querySelector('body').appendChild(createContainer("game"))
    document.querySelector('.game').appendChild(createQuestionCard())
    document.querySelector('.game').appendChild(createContainer("answers"))
    answers.forEach(answer => document.querySelector('.answers').appendChild(createAnswerCard()))

    // Create empty array to save all the answers
    window.localStorage.setItem('trivia', JSON.stringify([]))

    console.log(trivia)
    console.log(data)

    fillCards(trivia)
    return popUsedQuestion(data, trivia)
}