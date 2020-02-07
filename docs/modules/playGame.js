import pickTrivia from './selectTrivia.js'

export default function playGame(data) {
    let trivia = pickTrivia(data)[0]
    let correct_answer = trivia.correct_answer
    let wrong_answers = trivia.incorrect_answers

    console.log(trivia)
    console.log(correct_answer)
    console.log(wrong_answers)

    console.log(pickTrivia(data))
}