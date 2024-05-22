import {SectionInBody} from "./scripts/SectionInBody.js";

const provideDataFromAPI = async (url) => {
    const res = await fetch(url)
    return res.json()
}


///////////////// Cat API /////////////////
const scCat = new SectionInBody("cat", "Cat API (gimme more cats)", "Use the API endpoints at catfact.ninja. Create a page with a nice cat image and a big button saying Give me another cat fact. When the user clicks the button, a random fact is loaded from the API and shown.", 1)

scCat.add()

const generateRandomCatFact = async () => {
    const data = await provideDataFromAPI("https://catfact.ninja/fact")
    return data.fact
}
const prepareHTMlforCatResult = async () => {
    const radomFact = await generateRandomCatFact()
    return `<img src="https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg" alt="cat-picture"><p>${radomFact}</p>`
}
scCat.addInteraction(async () => scCat.printResult(await prepareHTMlforCatResult()))


///////////////// Bored API /////////////////

const scBored = new SectionInBody("bored", "Random recreational activity", "Are you bored? Use the API endpoints at boredapi.com to fetch a random activity to do. Create page that will display a random activity suggestion everytime you button is clicked.", 1)

scBored.add()

const generateRandomRecreationalActivity = async () => {
    const data = await provideDataFromAPI("http://www.boredapi.com/api/activity?type=recreational")
    return data.activity
}
const prepareHTMLforActivityResult = async () => {
    const randomActivity = await generateRandomRecreationalActivity()
    return `<p>${randomActivity}.</p>`
}
scBored.addInteraction(async () => scBored.printResult(await prepareHTMLforActivityResult()))




///////////////// Dog image API /////////////////

const scDog = new SectionInBody("dog",
    "Woof to creativity", 'Rundom dog image for your inspiration:', 1)

scDog.add()

const generateRandomImg = async () => {
    const data = await provideDataFromAPI("https://dog.ceo/api/breeds/image/random")
    return data.message
}

const prepareHTMLforImgResult = async () => {
    const pictureSrc = await generateRandomImg()
    return `<img src="${pictureSrc}" alt = "random dog picture">`
}

scDog.addInteraction(async () => scDog.printResult(await prepareHTMLforImgResult()))