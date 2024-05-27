export class RatingWidget {
    constructor(title, value) {
        this.title = title || "anonymous";
        this.value = value || 0;
    }

    getId() {
        return this.title.replace(/\s+/g, '');
    }

    makeHTML() {
        const widget = document.createElement("div")
        widget.classList.add(`rating`)
        widget.setAttribute("id", this.getId())
        widget.innerHTML =
            `<div class="rating__title">${this.title}</div>
             <div class="rating__value">${Math.ceil(this.value/20)}</div>
             <div class="rating__stars">
                <div class="rating__star"></div>
                <div class="rating__star"></div>
                <div class="rating__star"></div>
                <div class="rating__star"></div>
                <div class="rating__star"></div>
           </div>`
        return widget
    }

    getContainer() {
        return document.getElementById(this.getId())
    }

    getHeader() {
        return this.getContainer().querySelector(".rating__title")
    }

    getPoints() {
        return this.getContainer().querySelector(".rating__value")
    }

    getStars() {
        return this.getContainer().querySelectorAll(".rating__star")
    }


    addToDOM() {
        document.body.appendChild(this.makeHTML())
        const stars = this.getStars()
        stars.forEach((star, index) => {
            star.addEventListener("click", () => {
                this.value = index+1
                console.log(index, this.value)
                resetText(this.getPoints(), this.value)
                resetStarsColor(stars, this.value)
            })
        })

        const resetText = (field, rating) => {
            field.textContent = rating
        }

        const resetStarsColor = (arr, rating) => {
            arr.forEach((item, index) => {
                if (index < rating) {
                    item.classList.add("rating__star--on")
                } else {
                    item.classList.remove("rating__star--on")
                }
            })
        }
    }
}

// `${Math.ceil(this.value/20)}`