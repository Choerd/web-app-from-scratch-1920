export default function pickTrivia(data) {
    let trivia = data[Math.floor(Math.random() * Math.floor(data.length))]
    return [trivia, data]
}