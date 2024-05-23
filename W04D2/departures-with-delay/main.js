import {Train} from "./Train.js";

const loadingScreen = document.querySelector(".loading")
const phDeparturesList = document.querySelector(".departures-list")

const hideElementToggle = (element) => {
    element.classList.toggle("hidden")
}

const loadData = async (url) => {
    const res = await fetch(url)
    return res.json()
}

document.addEventListener("DOMContentLoaded", async () => {
    const arrDepartures = await loadData("https://classes.codingbootcamp.cz/assets/classes/api/departures.php")

    arrDepartures.forEach(dep => {
        const objWidget = new Train(dep)
        const elWidget = objWidget.getElement()

        phDeparturesList.appendChild(elWidget)
    })

    hideElementToggle(phDeparturesList)
    hideElementToggle(loadingScreen)
})




