const phSortingContainer = document.querySelector(".sortingContainer")
const phArticlesList = document.querySelector(".articlesList")

const loadData = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

const loadCategoriesList = async () => {
    const parsedRes = await loadData("https://classes.codingbootcamp.cz/assets/classes/602/guardian.php")
    return parsedRes.data
}
document.addEventListener("DOMContentLoaded", await loadCategoriesList)

const createSortingButton = (categoryName) => {
    const button = document.createElement("div")
    button.className = categoryName + " sortingButton"
    button.innerHTML = categoryName
    phSortingContainer.appendChild(button)
    return button
}

const loadArticlesList = async (category) => {
    const parsedRes = await loadData(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`)
    return  parsedRes.data.channel.item
}

const printArticles = async (category) => {
    phArticlesList.innerHTML = `<h2>${category.toUpperCase()}</h2>` + generateArticlesHTML(await loadArticlesList(category))
}
const generateArticlesHTML =  (arr) => {
    return arr.map(article => {
            return `<p>"${article.title}." <a href=${article.link}> Link to the article =></a></p>`;
        }
    ).join("")
}

const loadPage = async () => {
    const categories = await loadCategoriesList()
    categories.forEach((category) => {
        const button = createSortingButton(category)
        button.addEventListener("click",  () => printArticles(category))
    })
}

await loadPage()

