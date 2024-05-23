let textRating = document.querySelector('.rating__value')
const stars = document.querySelectorAll('.rating__star')

stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        const rating = index + 1
        resetText(textRating, rating)
        resetStarsColor(stars, rating)
    })
})

const resetText = (field, rating) => {
    field.textContent = rating
}

const resetStarsColor = (arr, rating) => {
    arr.forEach((star) => star.classList.remove("rating__star--on"))
    for (let i = 0; i < rating; i++) {
        arr[i].classList.add("rating__star--on")
    }
}

