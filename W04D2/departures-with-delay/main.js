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
    const arrDepartures = await loadData("https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php")

    arrDepartures.forEach(dep => {
        const tableRow = document.createElement("tr")
        tableRow.innerHTML = `
                <td>${dep.time.hrs}:${dep.time.mins}</td>
                <td>${dep.train}</td>
                <td>${dep.no}</td>
                <td>${dep.to}</td>
                <td>${dep.status}</td>
                <td>${dep.track}</td>`
        phDeparturesList.appendChild(tableRow)
    })

    hideElementToggle(phDeparturesList)
    hideElementToggle(loadingScreen)
})




