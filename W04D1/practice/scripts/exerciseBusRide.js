import {Bus} from "./Bus.js";

const stations = ["Praha", "Jihlava", "Brno", "Břeclav", "Vídeň"]

export const busOne = new Bus("1", "Z Prahy do Vídně", stations, 40, 30, 0)

export const busContentForHTML = (objBus) => {
    return `
<div class="bus" id="bus${objBus.id}">
  ${infoHTML(objBus) + buttonsHTML(objBus)}
</div>`
}

export const activateButtonsOfBus = (objBus) => {
    const buttons = document.querySelectorAll(`.btn_bus${objBus.id}`)
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            switch (button.getAttribute("id")) {
                case "next":
                    objBus.move()
                    break
                case "onboard":
                    objBus.board(1)
                    break
                case "deboard":
                    objBus.deboard(1)
            }
            const element = document.querySelector(`#bus${objBus.id} div.info`)
            refreshInfo(objBus, element)
        })
    })
}

const infoHTML = (objBus) => {
    return `
    <div class="info"><p>Direction: ${objBus.direction}</p>
        <p>Last stop: ${objBus.current()}</p>
        <p>Next stop: ${objBus.next()}</p>
        <p>Passangers boarded: ${objBus.passangers}</p>
        <p>Total number of seats: ${objBus.seats}</p>
    </div>`
}

const buttonsHTML = (objBus) => {
    return `  
  <button class="btn_bus${objBus.id}" id="next">Move one stop forward</button>
  <button class="btn_bus${objBus.id}" id="onboard">Onboard one passanger</button>
  <button class="btn_bus${objBus.id}" id="deboard">Deboard one passanger</button>`
}

const refreshInfo = (objBus, element) => {
    element.innerHTML = infoHTML(objBus)
}

