let amount = 10
let type = 'multiple'
let url = 'https://opentdb.com/api.php?amount=' + amount + '&type=' + type

export default async function fetchData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
    return data.results
}


