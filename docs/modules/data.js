// Trivia Open Database
const amount = 10
const type = 'multiple'
const url = 'https://opentdb.com/api.php?amount=' + amount + '&type=' + type

export async function fetchTriviaData() {
    const response = await fetch(url)
    const data = await response.json()
    return data.results
}


// Wikipedia API
// Regex from: https://stackoverflow.com/questions/19921844/how-to-remove-all-special-characters-except-numbers-and-space-in-a-string-using/19925179
const fixCorsError = 'https://cors-anywhere.herokuapp.com/'
const summary = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='

export async function fetchWikipediaData(answers) {
    const wikipedia = answers.map(answer => {
        const removeSpecialCharactersFromString = answer.correctAnswer.replace(/[^a-z\d\s]+/gi, "")
        const string = removeSpecialCharactersFromString.replace(/ /g, "_")

        const singleWikipediaData = fetch(fixCorsError + summary + string)
            .then(res => res.json())
            .then(jsonData => jsonData.query.pages)
            .catch(error => console.log(error))

        return singleWikipediaData
    })
    const allWikipediaData = Promise.all(wikipedia)
    return allWikipediaData
}