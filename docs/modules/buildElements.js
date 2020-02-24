import * as helper from './helperFunctions.js'

export function container(attribute) {
    const section = document.createElement('section')
    section.className = attribute

    return section
}

export function card(type) {
    const div = document.createElement('div')
    div.className = type
    const img = document.createElement('img')
    img.src = "images/quizmaster-logo.svg"
    const p = document.createElement('p')

    div.appendChild(img)
    div.appendChild(p)

    return div
}

export function resultQuestion(data) {
    const a = document.createElement('a')
    a.textContent = data[0].question

    if (data[1][Object.keys(data[1])].pageid != undefined) {
        a.href = "#" + data[1][Object.keys(data[1])].pageid
        a.className = 'wikipediaExists'
    }
    a.className = a.className + " answer-question"

    return a
}

export function resultAnswer(answer) {
    const correctAnswer = answer.correctAnswer
    const userAnswer = answer.userAnswer
    const allAnswers = helper.shuffleArray([answer.correctAnswer, answer.wrongAnswers].flat(2))
    const correctColor = getComputedStyle(document.documentElement).getPropertyValue('--correct-answer')
    const wrongColor = getComputedStyle(document.documentElement).getPropertyValue('--wrong-answer')

    return allAnswers.map(answer => {
        const p = document.createElement('p')
        p.textContent = answer
        p.className = "answer"

        if (correctAnswer === userAnswer) {
            if (correctAnswer === answer) {
                p.style.backgroundColor = correctColor
            }
        }
        if (correctAnswer != userAnswer) {
            if (correctAnswer === answer) {
                p.style.backgroundColor = correctColor
                p.className = 'answerIsGood'
            } else if (userAnswer === answer) {
                p.style.backgroundColor = wrongColor
                p.className = 'answerIsWrong'
            }
        }
        return p
    })
}

export function wikipediaContent(data) {
    let article = document.createElement('article')
    let title = document.createElement('h1')
    title.textContent = data.title
    let text = document.createElement('p')
    text.textContent = data.extract

    article.appendChild(title)
    article.appendChild(text)

    return article
}