import fillCards from './fillCards.js'
import { popUsedQuestion } from './helperFunctions.js'


export default function playRound(data) {
    let answerCards = document.querySelectorAll('.answers div')

    answerCards.forEach(card => {
        card.addEventListener('click', function () {

            test(data)

            // TODO: Steps
            //// Add them to the LocalStorage variable
            // Remove the trivia from the array
            // Rerender with a new trivia (fillCards(new Data))
        })
    })
}

function test(data) {
    let trivia = data[Math.floor(Math.random() * Math.floor(data.length))]

    fillCards(trivia)

    console.log(trivia)
    console.log(data)
    data = popUsedQuestion(data, trivia)
}