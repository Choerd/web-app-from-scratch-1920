import fetchData from './modules/data.js'
import setupGame from './modules/game/setupGame.js'
import playRound from './modules/game/playRound.js'
import setupResults from './modules/results/setupResults.js'
import fetchData2 from './modules/wikipedia/wikipediaData.js'

function renderGame() {
    fetchData()
        .then(data => setupGame(data))
        .then(data => playRound(data))
        .catch(error => console.log(error))
}


function getInfoAnswers(answers) {
    if (JSON.parse(localStorage.getItem('wikipedia')) == null) {
        console.log('Data from fetchCall')
        fetchData2(answers)
            .then(data => {
                localStorage.setItem('wikipedia', JSON.stringify(data))
                return data
            })
            .then(data => setupResults([JSON.parse(localStorage.getItem('trivia')), data]))
    } else {
        console.log('Data from LocalStorage')
        setupResults([JSON.parse(localStorage.getItem('trivia')), JSON.parse(localStorage.getItem('wikipedia'))])
    }
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
            document.querySelector('.enter-results').className = 'hide'
        }

        getInfoAnswers(JSON.parse(localStorage.getItem('trivia')))
    },
    ':id': function (id) {
        let wikipediaData = JSON.parse(localStorage.getItem('wikipedia'))
        let contentData = wikipediaData.filter(item => Object.keys(item)[0] == id)[0][id]

        console.log(contentData)
    }
})