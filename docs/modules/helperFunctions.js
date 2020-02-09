export function randomObjectFromArray(data) {
    return data[Math.floor(Math.random() * Math.floor(data.length))]
}

export function popUsedQuestion(array, question) {
    return array.filter(d => d != question)
}
