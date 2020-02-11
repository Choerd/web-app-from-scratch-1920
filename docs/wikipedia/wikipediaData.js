let fixCorsError = 'https://cors-anywhere.herokuapp.com/'
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='

let test = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='




// Regex from: https://stackoverflow.com/questions/19921844/how-to-remove-all-special-characters-except-numbers-and-space-in-a-string-using/19925179

export default async function fetchData2(answers) {

    const wikipedia = answers.map(answer => {
        let removeSpecialCharactersFromString = answer.correctAnswer.replace(/[^a-z\d\s]+/gi, "")
        let string = removeSpecialCharactersFromString.replace(/ /g, "_")

        const response = fetch(fixCorsError + test + string)
            .then(res => res.json())
            .then(jsonData => {
                console.log(jsonData)
            })
    })
}