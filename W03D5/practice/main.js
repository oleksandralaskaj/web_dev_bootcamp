const body = document.querySelector("body")

const prgph = document.createElement("p")
prgph.textContent = "lorem ipsum dolor sit amet"
prgph.classList.add("main-p")
prgph.style.color = "blue"

body.appendChild(prgph)


const elementFromHTML = (html) => {
    const div = document.createElement('div');  // creates an element in the memory (not displayed)
    div.innerHTML = html;
    return div.firstChild;
}

const container = elementFromHTML(`<div class="container"><h4 class="subtitle">Subtitle</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi asperiores beatae, consequuntur cupiditate delectus doloribus dolorum ea excepturi fugit pariatur provident quasi qui quo quos rerum sit ut voluptatum.</p></div>`);


document.body.appendChild(container)