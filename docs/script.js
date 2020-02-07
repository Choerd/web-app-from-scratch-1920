import fetchData from './modules/data.js'
import setupGame from './modules/setupGame.js'
import playGame from './modules/playGame.js'
// import pickTrivia from './modules/selectTrivia.js'

fetchData()
    .then(data => setupGame(data))
    .then(data => playGame(data))
    .catch(error => console.log(error))


