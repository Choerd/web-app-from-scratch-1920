import fillCards from './fillCards.js'

export default function playRound(data) {
    let answerCards = document.querySelectorAll('.answers div')

    answerCards.forEach(card => {
        card.addEventListener('click', function () {
            let savedAnswers = JSON.parse(localStorage.getItem('trivia'))
            savedAnswers.push({
                answer: card.querySelector('p').textContent,
                totalAnswers: [data[0].correct_answer, data[0].incorrect_answers].flat(2)
            })
            localStorage.setItem('trivia', JSON.stringify(savedAnswers))

            fillCards(data)

            // TODO: Steps
            //// Add them to the LocalStorage variable
            // Remove the trivia from the array
            // Rerender with a new trivia (fillCards(new Data))
        })
    })
}

