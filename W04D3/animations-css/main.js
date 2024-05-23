import {SectionInBody} from "./scripts/SectionInBody.js";

///// Loading screen anination and then show picture
const scLoading = new SectionInBody("loading", "Spinner", "From the internet download an image of your choice. Download the image of a spinner. Create a website that pretends the loading of the image takes 4 seconds. Display a rotating spinner for 4 seconds and then show the image to the user.", 1)


const loadingPicture = ()=> {
    const loadingHTML = `<img id="spinner" src='./css/spinner.png' alt='spinner'>`
    const catPicHTMl = `<img src="./css/cute-cat-photos.jpeg" alt="cat-picture">`
    scLoading.printResult(loadingHTML)
    setTimeout(()=>{scLoading.printResult(catPicHTMl)}, 4000)
}

scLoading.add()
scLoading.addInteraction(loadingPicture)



////////
const scInput = new SectionInBody("Input magic", "Every time user inputs \"codecamp\" at any place of text inside of textarea, write into console \"I love JavaScript\".", 1)


const textareaHTML = `
<label>
    <textarea></textarea>
</label>`
