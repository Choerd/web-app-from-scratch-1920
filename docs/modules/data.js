export default async function fetchData() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    const data = await response.json()
    return data.results
}


