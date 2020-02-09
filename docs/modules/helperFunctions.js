export function randomObjectFromArray(data) {
    return data[Math.floor(Math.random() * Math.floor(data.length))]
}

export function popUsedQuestion(array, question) {
    return array.filter(d => d != question)
}

// http://jsfiddle.net/k65s3/
// For this function I've used the above resource. I use this to prevent myself from using innerHTML
export function decodeEntities(string) {
    var decodedString = document.createElement("textarea");
    decodedString.innerHTML = string;
    return decodedString.value;
}