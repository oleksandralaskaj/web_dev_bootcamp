const body = document.querySelector("body")
const makeNewSectionWithButton = (h1, p, id) => {
    const section = document.createElement('section')
    section.innerHTML = `<h1>${h1}</h1>
        <p>${p}</p>
        <button id=${id}>Click me to interact</button>
        <p class="result ${id}"></p>`
    body.appendChild(section)
}

///Weather
const id1 = "weather"
makeNewSectionWithButton("Weather", "Write a condition which will output (in the console or somewhere into the document) a recommendation on what to wear based on the value of the weather constant: if the weather is 'sunny' output Use sunscreen; if the weather is 'windy' output Wear a coat; if the weather is 'rainy' output Bring an umbrella; if the weather is anything else (other than the previous 3 options) print Dress accordingly.", id1)
const btnWeather = document.getElementById(id1);
const phWeather = document.querySelector(`.${id1}`)
btnWeather.addEventListener("click", () => {
    const weather = prompt("What's the weather is like today?")
    switch (weather) {
        case "sunny":
            phWeather.innerHTML = "Wear a sunscreen.";
            break;
        case "snowy":
        case "stormy":
        case "windy":
            phWeather.innerHTML = "Wear a coat.";
            break;
        case "rainy":
            phWeather.innerHTML = "Take an umbrella!";
            break;
        default:
            phWeather.innerHTML = "Dress accordingly, you stupid."
    }
})

///Whether odd
const id2 = "odd"
makeNewSectionWithButton("Whether odd", "Display user info, whether inserted number is odd or even.", id2)
const btnOdd = document.getElementById(id2);
const phOdd = document.querySelector(`.${id2}`);
btnOdd.addEventListener("click", () => {
    const number = Number(prompt("Insert the umber you want to check:"))
    if (number % 2 === 0) {
        phOdd.innerHTML = "The number is even."
    } else if (number % 2 > 0) {
        phOdd.innerHTML = "The number is odd."
    } else {
        phOdd.innerHTML = "Input is wrong."
    }
})
