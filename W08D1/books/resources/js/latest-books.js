const phList = document.querySelector('#latest-books')

const loadData = async () => {
    const response = await fetch('/api/books/latest');
    const data = await response.json();
    let content = ''
    data.forEach((book) => content += `<li><p class="title">"${book.title}" </p> <p class ='desc'>Description:</p>${book.description}</li>`)
    phList.innerHTML = (content)
}

await loadData();
