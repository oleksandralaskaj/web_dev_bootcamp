const body = document.querySelector("body")
const makeNewSectionWithButton = (h1, p, id) => {
    const section = document.createElement('section')
    section.innerHTML = `
        <h1>${h1}</h1>
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


///Bus tickets
const id3 = "bus"
const basePrice = 12;
makeNewSectionWithButton("Bus tickets", "Let's say that the basic price for a bus ticket is 12 euros. Create a page that will ask the user for their age and compute a discounted price according to these rules: age under 6 years (preschool kids): 0 euro, age between 6 and 15 (pupils): 35% of the basic price, age between 16 and 26 (students): 65% of the basic price, age between 27 and 64 (adults): 100% of the basic price, otherwise (seniors): 50% of the basic price.", id3)
const btnBus = document.getElementById(id3);
const phBus = document.querySelector(`.${id3}`);
btnBus.addEventListener("click", () => {
    let price = 0
    const age = Number(prompt("How old are you?"))
    switch (true) {
        case (age >= 6 && age <= 15):
            price = (0.35 * basePrice).toFixed(2);
            break;
        case (age >= 16 && age <= 26):
            price = (0.65 * basePrice).toFixed(2);
            break;
        case (age >= 27 && age <= 64):
            price = basePrice;
            break;
        case (age >= 65):
            price = 0.5 * basePrice
            break;
    }
    phBus.innerHTML = `Price for your ticket is ${price} EUR.`
})


///Swimmers
const id4 = "swimm"
makeNewSectionWithButton("Swimming simulation", "Write a webpage that simulates a classic Olympic discipline swimming 100 m freestyle. The swimmers in this discipline regularly achieve times below 50 seconds. Your webpage should ask for three names of swimmers. Then it generates three random times between 45 and 60 seconds that represent the swimmers' swimming times. Then it outputs who won the gold medal, who won the silver one, and who won the bronze one.", id4)
const btnSwimm = document.getElementById(id4);
const phSwimm = document.querySelector(`.${id4}`);

btnSwimm.addEventListener("click", () => {
    const names = [];
    const results = [];
    const lineup = {
        gold: undefined,
        silver: undefined,
        bronze: undefined
    };
    for (let i = 1; i < 4; i++) {
        names.push(prompt(`Insert the name of swimmer #${i}.`))
        results.push(Math.floor(Math.random() * 15) + 45)
    }
    const goldIndex = results.indexOf(Math.min(...results))
    const bronzeIndex = results.indexOf(Math.max(...results))
    for (let i = 0; i < results.length; i++) {
        if (i === goldIndex) {
            lineup.gold = {
                name: names[i],
                result: results[i]
            }
        } else if (i === bronzeIndex) {
            lineup.bronze = {
                name: names[i],
                result: results[i]
            }
        } else {
            lineup.silver = {
                name: names[i],
                result: results[i]
            }
        }
    }
    phSwimm.innerHTML = `The gold medalist is ${lineup.gold.name} with the result of ${lineup.gold.result}s. The silver is taken by ${lineup.silver.name} which finishd with ${lineup.silver.result}s. The bronze medal goes to ${lineup.bronze.name} with the result of ${lineup.bronze.result}s.`
})


///Leap year
const id5 = "leap"
makeNewSectionWithButton("Leap year", "Create a web application that will tell the user if a year is a leap year or not. A year is a leap year if it is divisible by 4. However, if the year is also divisible by 100 it is a leap year only if it is also divisible by 400.", id5)
const btnLeap = document.getElementById(id5);
const phLeap = document.querySelector(`.${id5}`);

btnLeap.addEventListener("click", () => {
    const year = Number(prompt("Insert year you want to check:"))
    if (year) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            phLeap.innerHTML = `The year ${year} is a leap year.`
        } else {
            phLeap.innerHTML = `The year ${year} is not a leap year.`
        }
    } else {
        phLeap.innerHTML = `Wrong input, try again.`
    }
})


//Spread of 3 values
const id6 = "spread"
makeNewSectionWithButton("Spread of 3 values",
    "Create a function taking three numbers a, b, and c and returning their spread. Spread is the distance between the maximum and minimum value.", id6)
const btnSpread = document.getElementById(id6);
const phSpread = document.querySelector(`.${id6}`);

btnSpread.addEventListener("click", () => {
    const numbers = []
    for (let i = 1; i < 4; i++) {
        numbers.push(Number(prompt(`Enter your number #${i}:`)))
    }
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    phSpread.innerHTML = `The spread of inserted numbers is ${max - min}.`
})

///Salary calculator with fancy design
const id7 = "salary"
const makeSectionSalary = () => {
    const section = document.createElement('section')
    section.innerHTML = `
        <h1>Salary calculator</h1>
        <p>Create an HTML page with a form where the user can enter their hourly pay, how many hours a day they work for how many days a month.</p>
        <form>
            <label for="pay-hour">Pay for hour:</label>
            <input type="text" name="pay-hour" id="pay-hour">
            <label for="hours-dayr">Work hours per day:</label>
            <input type="text" name="hours-day" id="hours-day">
            <label for="days-month">Work days per month:</label>
            <input type="text" name="days-month" id="days-month">
         </form>            
        <button  id=${id7}>Calculate salary</button>
        <p class="result ${id7}"></p>`
    body.appendChild(section)
}
makeSectionSalary()
const btnSalary = document.getElementById(id7);
const phSalary = document.querySelector(`.${id7}`);

btnSalary.addEventListener("click", () => {
    const hourlyPay = Number(document.getElementById("pay-hour").value)
    const hoursPerDay = Number(document.getElementById("hours-day").value)
    const daysperMonth = Number(document.getElementById("days-month").value)
    phSalary.innerHTML = `Your month salary is ${hourlyPay*hoursPerDay*daysperMonth}.`
})



