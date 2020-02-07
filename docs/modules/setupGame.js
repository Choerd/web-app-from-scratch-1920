import { createContainer, createQuestionCard, createAnswerCard } from './createCards.js'
import pickTrivia from './selectTrivia.js'

export default function setupGame(data) {
    let trivia = pickTrivia(data)
    let answers = [trivia[0].correct_answer, trivia[0].incorrect_answers].flat(2)

    document.querySelector('body').appendChild(createContainer("game"))
    document.querySelector('.game').appendChild(createQuestionCard())
    document.querySelector('.game').appendChild(createContainer("answers"))
    answers.forEach(answer => document.querySelector('.answers').appendChild(createAnswerCard()))
    return data
}
