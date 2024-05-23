const textRating = document.querySelector('.rating__value').textContent
const stars = document.querySelectorAll('.rating__star')

stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        console.log('The stars NodeList:')
        console.log(stars)
        console.log('The clicked star element:')
        console.log(star)
        console.log('The index of the clicked star in the NodeList:')
        console.log(index)
        console.log('Rating expressed by text:')
        console.log(textRating)
        console.log('-------------------------------------------------------------------------')
    })
})