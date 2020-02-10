import fetchData from './modules/data.js'
import setupGame from './modules/setupGame.js'
import playRound from './modules/playRound.js'

// todo: CSS global variables

fetchData()
    .then(data => setupGame(data))
    .then(data => playRound(data))
    .catch(error => console.log(error))