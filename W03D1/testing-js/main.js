const body = document.querySelector("body")

const makeNewSection = (h1, p, result) => {
    const section = document.createElement('section')
    section.innerHTML = `
        <h1>${h1}</h1>
        <p>${p}</p>
        <p class="result">${result}</p>`
    body.appendChild(section)
}
const makeNewSectionWithButton = (h1, p, id) => {
    const section = document.createElement('section')
    section.innerHTML = `<h1>${h1}</h1>
        <p>${p}</p>
        <button id=${id}>Click me to interact</button>
        <p class="result ${id}"></p>`
    body.appendChild(section)
}


///Wine maker
const oneGlassTime = 5;
const minutsInHour = 60
const hoursInDay = 7;
const countForHour = minutsInHour / oneGlassTime;
const countPerDay = countForHour * hoursInDay;
const answerOne = `In one hour wime maker can produce ${countForHour} glasses. Per day it's going to be ${countPerDay} glasses.`

makeNewSection("Wine glasses", "A wine glass-making machine creates one glass in 5 minutes." +
    "How many wine glasses does it make in an hour?\n" +
    "How many wine glasses does it make in a day if it can only work for 7 hours.", answerOne)


/// Tiling a hallway
const width = 6;
const length = 2.5;
const cmInm = 100
const tileSurface = (50 / cmInm) ^ 2;
const needNumberOfTiles = width * length / tileSurface;
const answerTwo = "To tile a hallway we'll need " + needNumberOfTiles + " tiles."

makeNewSection("Tiling a hallway", "A rectangular hallway floor of size 6m x 2.5m is to be tiled with square tiles. Each tile is 50cm x 50cm. How many tiles do we need?", answerTwo)


/// Salary
const pay = 12;
const hours = 8;
const days = 21;
const tax = 0.15;
const brutto = pay * hours * days;
const netto = brutto * (1 - tax);
const answerThree = `Gross wage is going to be ${brutto}$ and net wage is ${netto}$ after 15% taxes.`

makeNewSection("Salary", "Let your salary as a junior programmer be 12€ per hour. Compute your monthly brutto (gross) salary if you work 8 hours a day 21 days a month. Compute your netto salary after 15% taxing.", answerThree)


///Mortgage
const pricePerMeter = 6688;
const footage = 80;
const crownsForEuro = 25;
const priceInCZK = Math.round(pricePerMeter * footage * crownsForEuro)
const partWithMortgage = 0.85;
const monthlyPayment = 800;
const monthInYear = 12;
const yearsToPay = Math.round(pricePerMeter * footage * partWithMortgage / monthlyPayment / monthInYear);
const answerFour = `An 80 square meter artment Prague costed ${priceInCZK} CZK. I will take ${yearsToPay} years to pay of debt, if 85% of value was pated by mortgage`;

makeNewSection("Mortgage", "The average price of apartments located in the city of Prague as of December 2019 is 6 688€ per square meter. What price in EUR would you pay for an 80 square meter apartment? What is the price in CZK? Say you take a mortgage for 85% of the apartment's price. How many years will your mortgage last if you agree to pay 800€ per month? Assume there is no interest or other costs associated with the mortgage.", answerFour)


//Study Time
const classHours = 4 * 7 + 3;
const studyHours = Math.floor(0.3 * classHours);
const weeks = 12;
const totalStudyTime = (classHours + studyHours) * weeks;
const answerFive = `It is spent ${classHours} hours in class, additionaly ${studyHours} hours at home, so that total time spent studying during 12 weeks of bootcamp is ${totalStudyTime} hours.`

makeNewSection("Study time", "In the Bootcamp each week you spend 7 hours for 4 days and 3 hours for one day attending the classes. Compute the total number of hours you attend per one week. Let's say that you spend another 30% of the weekly class hours by self-studying every week. Compute the total number of weekly study hours. Compute the total number of study hours throughout the whole Bootcamp assuming that all 12 weeks have the same sum of study hours.", answerFive)


//Picture frame hanging
const wallWidth = 245;
const frameWidth = 175;
const photoWidth = 4250;
const photoHeight = 2040
const pictureResolution = photoWidth / photoHeight;
const distaceFromFrame = 10;
const clinch1 = (wallWidth - frameWidth) / 2 + distaceFromFrame;
const clinch2 = wallWidth / 2;
const clinch3 = (wallWidth - frameWidth) / 2 + frameWidth - distaceFromFrame;
const frameHeight = Math.floor(wallWidth / pictureResolution);
const answerSix = `Clonche have to be located ${clinch1}cm, ${clinch2}cm and ${clinch3}cm from the left edge of wall respectively. The height of frame has to me ${frameHeight}cm.`

makeNewSection("Picture hanging", "The wall of the room is 245cm in width and we want the picture to be 175cm wide and be horizontally centered on the wall. We have a photo of the tree in the resolution of 4250×2040 pixels. The picture needs to hang on three clinches hammered to the wall just below the edge of the picture's frame. One clinch is horizontally in the middle of the frame and the other two are located 10cm from the left/right edge of the frame. Compute the distances from the left edge of the wall for all three clinches. Compute the needed height of the picture's frame (in cm) so that the frame's aspect ratio matches the aspect ratio of the digital picture.", answerSix)


// Population of region
const yearBeginnig = 2000;
const yearEnd = 2100;
const populationStart = 551281;
const declime = 0.014;
let populationEnd;
for (let i = 1; i <= (yearEnd - yearBeginnig); i++) {
    populationEnd = populationStart * (1 - declime)
}
const answerSeven = `In year ${yearEnd} population of Pilsner region in the Czech Republic will be ${Math.floor(populationEnd)} people.`

makeNewSection("Population", "In the year 2000, the population of the Pilsner region in the Czech Republic was 551 281. Till the end of the year 2001 there was a drop in population of 1.4%. In case of a steady decrease at the same rate (1.4% per year), what would the population of the region be in 2100?", answerSeven)


///Carpet
const room = 30;
const vanLengh = 5;
const carpetSide = Math.sqrt(room).toFixed(2);
let verdict;
if (carpetSide < vanLengh) {
    verdict = "will"
} else {
    verdict = "won't"
}
const answerEight = ` The side of carper should be approximately ${carpetSide}m, so it ${verdict} fit in the ven.`

makeNewSection("Carpet", "We have a square room with an area of 30m2 for which we need a new carpet. What should the length of the carpet's side be in meters? Can we fit it in a van with 5m of space?", answerEight)


/// Birthday
const id1 = "birthday"
const yearNow = 2024;

makeNewSectionWithButton("Birthday", "Ask the user for his birth year using the prompt function. Convert the result into a number by calling the Number function. Compute the users' age using the current year.", id1);
const phAnswerNine = document.querySelector(`.${id1}`);
const btnBirtday = document.querySelector(`#${id1}`)
btnBirtday.addEventListener("click", () => {
    const birthYear = Number(prompt("What year were you born?"));
    changeOutputBirthday(Number(birthYear))
})
const changeOutputBirthday = (birthYear) => {
    phAnswerNine.innerHTML = `This year you're turning ${yearNow - birthYear}.`
}


///Velocity
const id2 = "velocity"
const coeficient = 1.609344;

makeNewSectionWithButton("Velocity", "Create a website that asks the user to enter a velocity in miles. Convert the user's value to a number and save it in a variable. Output the converted velocity in km/h.", id2)
const phAnswerTen = document.querySelector(`.${id2}`);
const btnVelocity = document.querySelector(`#${id2}`);
btnVelocity.addEventListener("click", () => {
    const mph = Number(prompt("What value of mph you whan me to translate into km/h?"));
    changeOutputVelocity(mph)
})
const changeOutputVelocity = (mph) => {
    phAnswerTen.innerHTML = 'Velocity in km/h is ' + Math.round(coeficient * mph)
}


///Exchange rate
const id3 = "exchange"
const rate = 25.695;

makeNewSectionWithButton("Exchange rate", "The current exchange rate from Czech crowns to euro is 25.695. Get a value from the user in euros and output equivalent value in Czech crowns. Round the result to whole crowns.", id3)

const phAnswerEleven = document.querySelector(`.${id3}`);
const btnExchange = document.querySelector(`#${id3}`);
btnExchange.addEventListener("click", () => {
    const euro = Number(prompt("What value of EUR you whan me to translate into CZK?"));
    changeOutputExchange(euro)
})
const changeOutputExchange = (euro) => {
    phAnswerEleven.innerHTML = `${euro} EUR is equal to ${Math.round(rate * euro)} CZK.`
}


///SMS splitting
const id4 = "sms"
const charMaxNumber = 160;

makeNewSectionWithButton("SMS splitting", "In the old days, an SMS could not have more than 160 characters. If you wanted to send a longer message your phone would split it to several small messages. Create a website that asks the user for a text message. The website will show how many messages you need to transfer the text using SMS.", id4)

const phAnswerTwelve = document.querySelector(`.${id4}`);
const btnSMS = document.querySelector(`#${id4}`);

btnSMS.addEventListener("click", () => {
    const number = Math.floor((prompt("What value of EUR you whan me to translate into CZK?")).length / charMaxNumber);
    number ? changeOutputSMS(number) : changeOutputSMS(1)

})
const changeOutputSMS = (number) => {
    phAnswerTwelve.innerHTML = `It would take ${number} SMS to send your text.`
}


///Celsius to Fahrenheit
const id5 = "ctof"

makeNewSectionWithButton("Celsius to Fahrenheit", "If you, as a European, are following American food bloggers, you might experience a very unpleasant surprise if you do not realize that Americans measure temperatures in Fahrenheit but Europen ovens use Celsius. Create a website that allows the user to enter a temperature in Fahrenheit and converts it to Celsius. As some European nations use a comma instead of a period in decimal numbers, make your site work even if the users enter the number with a comma. The result should always be displayed as a period.", id5)

const phAnswerThirteen = document.querySelector(`.${id5}`);
const btnCTOF = document.querySelector(`#${id5}`);

btnCTOF.addEventListener("click", () => {
    const inFahr = Number((prompt("Insert temperature value in Fahrenheit:").replace(",", ".")))
    changeOutputCTOF(inFahr)
})
const changeOutputCTOF = (inFahr) => {
    let inCels = Math.floor((inFahr - 32) * 5 / 9);
    phAnswerThirteen.innerHTML = `${inFahr} in Fahrenheit is approx. equal to ${inCels} in Celsius.`
}

///Dice roll
const id6 = "dice"

makeNewSectionWithButton("Dice rolls","Figure out how to simulate a 6-sided dice roll.", id6)

const phAnswerFourteen = document.querySelector(`.${id6}`);
const btnDice = document.querySelector(`#${id6}`);

btnDice.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    changeOutputDice(randomNumber)
})
const changeOutputDice = (randomNumber) => {
    phAnswerFourteen.innerHTML = `Your random number is ${randomNumber}.`
}

