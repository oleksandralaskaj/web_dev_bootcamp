// import {SectionInBody} from "./scripts/SectionInBody.js";
const phList = document.querySelector('#latest-books')

const loadData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php');
    const data = await response.json();

    let content = ''
    data.forEach((book) => content += `<li><p class="title">"${book.title}" by ${book.authors[0].name} </p> <p class ='desc'>Description:</p>${book.description}</li>`)
    phList.innerHTML = (content)
}

await loadData();