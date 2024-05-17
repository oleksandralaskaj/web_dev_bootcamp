//result og the round
const phResultOfRound = document.querySelector(".result-current")
//options to chose from in game
const options = ['Rock', 'Paper', 'Scissors']
// buttons with choise for player
const btnsPlay = document.querySelectorAll(".btn")
// data about players
const human = {
    score: 0,
    lastMove: '',
    showScore: function () {
        document.querySelector(".score-human").innerText = this.score
    },
    showLastMove: function () {
        document.querySelector(".choice-human").innerText = this.lastMove
    }
}
const bot = {
    score: 0,
    lastMove: '',
    showScore: function () {
        document.querySelector(".score-bot").innerText = this.score
    },
    showLastMove: function () {
        document.querySelector(".choice-bot").innerText = this.lastMove
    }
}
//rounds counter
let totalRoundCount = 0
const phTotalRounds = document.querySelector(".rounds")
//function updates displayed number od played rounds
const updateRounds =()=> {
    totalRoundCount++
    phTotalRounds.innerText = totalRoundCount
}

//fx simulating play of bot, results in one of the options
const botPlays = () => {
    return options[Math.floor(Math.random() * 3)]
}
const whoWins = () => {
    switch (true) {
        case human.lastMove === "Rock" && bot.lastMove === "Scissors":
        case human.lastMove === "Scissors" && bot.lastMove === "Paper":
        case human.lastMove === "Paper" && bot.lastMove === "Rock":
            human.score++
            return "You win this round"
        case human.lastMove === bot.lastMove :
            return "Tie"
        default:
            bot.score++
            return "Bot wins this round"
    }
}


btnsPlay.forEach((btn) => {
    btn.addEventListener("click", () => {
        human.lastMove = btn.innerText
        bot.lastMove = botPlays()
        phResultOfRound.innerHTML = whoWins()
        bot.showLastMove()
        bot.showScore()
        human.showLastMove()
        human.showScore()
        updateRounds()
    })
})

