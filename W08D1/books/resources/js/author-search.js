const phInput = document.getElementById('search-input')
const phOutput = document.getElementById('search-output')

const fetchSearchResults = async (searchValue) => {
    const response = await fetch('/api/authors/search?search=' + searchValue);
    const data = await response.json();

    phOutput.innerHTML = '';

    if (searchValue && searchValue !== '') {
        data.forEach(author => {
            phOutput.innerHTML += `<p>${author.name}</p><a href='/authors/${author.id}'><button>Read more</button></a>`
        });
    }
}

phInput.addEventListener('input', async (e) => {
    console.log(e.target.value)
   await fetchSearchResults(e.target.value);
})
