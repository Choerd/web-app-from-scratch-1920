import fetchData from './modules/data.js'
import setupGame from './modules/setupGame.js'
import fillCards from './modules/playGame.js'

fetchData()
    .then(data => setupGame(data))
    .then(data => fillCards(data))
    .catch(error => console.log(error))