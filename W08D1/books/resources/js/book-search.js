const phInput = document.getElementById('search-input')
const phOutput = document.getElementById('search-output')

const fetchSearchResults = async (searchValue) => {
    const response = await fetch('/api/books/search?search=' + searchValue);
    const data = await response.json();

    phOutput.innerHTML = '';

    if (searchValue && searchValue !== '') {
        data.forEach(book => {
            phOutput.innerHTML += `<p>${book.title}</p>`
        });
    }
}

phInput.addEventListener('input', async (e) => {
    console.log(e.target.value)
   await fetchSearchResults(e.target.value);
})
