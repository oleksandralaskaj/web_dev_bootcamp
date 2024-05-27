import {ReqOptions} from "./scripts/ReqOptions.js";
import {RatingWidget} from "./scripts/RatingWidget.js";

const urlRatings = "https://test-api.codingbootcamp.cz/api/58008a7f/ratings"


const getListOfRaitings = async (url) => {
    const response = await fetch(url)
    console.log(response)
    return await response.json()
}


const arrRaitings = await getListOfRaitings(urlRatings)
arrRaitings.forEach((item) => {
    const title = item.subject
    const value = item.value
    const objWidget = new RatingWidget(title,value)
    objWidget.addToDOM()
})