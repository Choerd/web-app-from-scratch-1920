import fetchData from './modules/data.js'

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error))

