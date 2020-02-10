export { createContainer, createQuestionCard, createAnswerCard }

function createContainer(attribute) {
    let section = document.createElement('section')
    section.className = attribute

    return section
}

function createQuestionCard() {
    let div = document.createElement('div')
    div.className = "question"
    let img = document.createElement('img')
    img.src = "images/quizmaster-logo.svg"
    let p = document.createElement('p')

    div.appendChild(img)
    div.appendChild(p)

    return div
}

function createAnswerCard() {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = "images/quizmaster-logo.svg"
    let p = document.createElement('p')

    div.appendChild(img)
    div.appendChild(p)

    return div
}