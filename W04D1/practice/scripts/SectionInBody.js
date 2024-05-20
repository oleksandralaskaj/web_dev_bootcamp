export default class SectionInBody {
    constructor(id, title, description, hasButton) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.hasButton = hasButton
    }

    add() {
        const section = document.createElement("section")
        section.setAttribute("id", this.id)
        section.innerHTML = `
                        <h1>${this.title}</h1>
                        <p>${this.description}</p>
                        <div class="result result__${this.id}"></div>`
        if (this.hasButton) {
            const button = document.createElement("button")
            button.setAttribute("id", `btn__${this.id}`)
            button.innerHTML= "Click me to interact"
            section.insertBefore(button, document.querySelector(`result__${this.id}`))
        }
        document.body.appendChild(section)
    }

    addInteraction(callback) {
        document.getElementById(`btn__${this.id}`).addEventListener("click", callback)
    }

    printResult(content) {
        document.querySelector(`.result__${this.id}`).innerHTML = content
    }
}