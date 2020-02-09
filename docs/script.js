import fetchData from './modules/data.js'
import setupGame from './modules/setupGame.js'
import fillCards from './modules/fillCards.js'
import playRound from './modules/playRound.js'

fetchData()
    .then(data => setupGame(data))
    .then(data => fillCards(data))
    .then(data => playRound(data))
    .catch(error => console.log(error))