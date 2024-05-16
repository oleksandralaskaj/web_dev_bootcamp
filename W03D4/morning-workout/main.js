const phGallery = document.querySelector(".gallery")
phGallery.classList.add("main")

const data =
    [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg", "London"], ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"], ["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg", "New York"], ["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg", "Nova Scotia"], ["https://classes.codingbootcamp.cz/assets/classes/1428/tokyo.jpeg", "Tokyo"], ["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg", "Venice"]]

// function preparing content to insert into HTMl
const constructor = (data) => {
    return data.map((city) => `<div class='image'><img src=${city[0]} alt=${city[1]}><div class="image__description">${city[1]}</div></div>`).join("");
}
// insertion of content into HTML
phGallery.innerHTML = constructor(data)
