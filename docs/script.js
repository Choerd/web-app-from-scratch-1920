import setupGame from './modules/game/setupGame.js'
import playRound from './modules/game/playRound.js'
import renderScoreboard from './modules/results/renderScoreboard.js'
import * as api from './modules/data.js'
import * as build from './modules/buildElements.js'

function renderGame() {
    api.fetchTriviaData()
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

        if (document.querySelector('#before-game').className != 'hide') {
            document.querySelector('#before-game').className = 'hide'
        }

        if (document.querySelector('.enter-results').className != 'enter-results hide') {
            document.querySelector('.enter-results').className = 'enter-results hide'
        }

        if (document.querySelector('#after-game') == null) {
            renderScoreboard(JSON.parse(localStorage.getItem('trivia')))
        } else {
            document.querySelector('#after-game').style.display = 'block'
        }

        if (document.querySelector('.wikipediaContent') != null) {
            document.querySelector('.wikipediaContent').remove()
        }
    },
    ':id': function (id) {
        if (document.querySelector('#before-game').className != 'hide') {
            document.querySelector('#before-game').className = 'hide'
        }

        if (document.querySelector('#after-game') != null) {
            document.querySelector('#after-game').style.display = 'none'
        }

        let wikipediaData = JSON.parse(localStorage.getItem('wikipedia'))
        let contentData = wikipediaData.filter(item => Object.keys(item)[0] == id)[0][id]

        if (document.querySelector('.wikipediaContent') == null) {
            document.querySelector('body').appendChild(build.container('wikipediaContent'))
            document.querySelector('.wikipediaContent').appendChild(build.wikipediaContent(contentData))
        } else {
            document.querySelector('.wikipediaContent').remove()
            document.querySelector('body').appendChild(build.container('wikipediaContent'))
            document.querySelector('.wikipediaContent').appendChild(build.wikipediaContent(contentData))
        }
    }
})