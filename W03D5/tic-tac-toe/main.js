const victoryCombos = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 32],
    [11, 21, 31],
    [12, 22, 32],
    [31, 32, 33],
    [11, 22, 33],
    [13, 22, 31],
]
let currentPlayer = "X"
let winnerIsKnown = false
let movesX = []
let movesO = []

const phInfo = document.querySelector(".info")
const items = document.querySelectorAll(".item")

items.forEach((item) => item.addEventListener("click", () => {

    if (!winnerIsKnown) {
        // insert current palyers sign intockliced item
        item.textContent = currentPlayer;
        // add recoded position to corresponding array
        addNewRecord(item.getAttribute("id"))
        // do we have a winner?
        if (currentPlayer === "X" ? isWinner(movesX) : isWinner(movesO)) {
            // items bocome unclickable
            winnerIsKnown = !winnerIsKnown;
            //inform user about wictory of one of the players
            for (let i = 5; i > 0; i--) {
                setTimeout(() => {
                    changeInfo(`The winner is player ${currentPlayer}. New game in: ${i}s.`)
                }, 1000 * (5 - i))

            }

            //time to cimmunicate the end of game
            setTimeout(() => {
                    // enable clicking again
                    winnerIsKnown = !winnerIsKnown;
                    //restore initial values of main varables
                    movesO = []
                    movesX = []
                    currentPlayer = "X"
                    // refresh items' content
                    items.forEach(item => item.textContent = "")
                    // info for first move in new game
                    changeInfo(`Player ${currentPlayer}, it's your turn!`)
                },
                5000
            )
        } else {
            // chaged current players value to the other one
            changePlayer()
            //prepare info for next round
            changeInfo(`Player ${currentPlayer}, it's your turn!`)
        }
    }

}))
// fx searches for a match between past moves of given player and victory combinations
const isWinner = (arr) => victoryCombos.some(combo => combo.every(position => arr.includes(position)))
// fx adds a new record to the current players array
const addNewRecord = (newRecord) => {
    currentPlayer === "X" ? movesX.push(Number(newRecord)) : movesO.push(Number(newRecord));
}
// fx which switches the currrenPlayer value to the opposit one
const changePlayer = () => {
    currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X"
}
// changes content in information field under playground
const changeInfo = (message) => {
    phInfo.textContent = message
}

changeInfo(`Player ${currentPlayer}, it's your turn!`)

