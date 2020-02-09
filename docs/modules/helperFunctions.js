export function pickTrivia(data) {
    let trivia = data[Math.floor(Math.random() * Math.floor(data.length))]
    return [trivia, data]
}

export function randomObjectFromArray(data) {
    return data[Math.floor(Math.random() * Math.floor(data.length))]
}