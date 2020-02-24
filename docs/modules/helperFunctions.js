export function randomObjectFromArray(data) {
    return data[Math.floor(Math.random() * Math.floor(data.length))]
}

export function popUsedQuestion(array, question) {
    return array.filter(d => d != question)
}

// http://jsfiddle.net/k65s3/
// For this function I've used the above resource. I use this to prevent myself from using innerHTML
export function decodeEntities(string) {
    const decodedString = document.createElement("textarea");
    decodedString.innerHTML = string;
    return decodedString.value;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}