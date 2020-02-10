import fetchData from './modules/data.js'
import setupGame from './modules/game/setupGame.js'
import playRound from './modules/game/playRound.js'
import setupResults from './modules/results/setupResults.js'

function renderGame() {
    fetchData()
        .then(data => setupGame(data))
        .then(data => playRound(data))
        .catch(error => console.log(error))
}

routie({
    '': function () {
        console.log('Press to start the game')
        document.querySelector('#before-game').className = "block"

        if (document.querySelector('#during-game') != null) {
            document.querySelector('#during-game').remove()
        }
    },
    'during-game': function () {
        console.log('Game has started')
        document.querySelector('#before-game').className = "hide"
        renderGame()

    },
    'after-game': function () {
        console.log('Check your results')
        setupResults()
    }
})