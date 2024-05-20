import Product from "./Product.js"
import {randomNumber} from "./fx.js"

// basic names to form obejcts after
const productNames = ["pen", "book", "paper", "pin", "tape", "calculator", "eraser", "notebook", "box", "files"]
// array to store objects mafe with class, filling it
const productObjects = []
productNames.forEach((name) => {
    productObjects.push(new Product(name, randomNumber(2, 20), randomNumber(1, 10)))
})
//creating hTML content for result part of section
export const productContent = productObjects.map((item) => {
        return `<div class="item"><p>${item.name} (${item.quantity} pieces left) for ${item.price}</p><button class="sell" id=${item.name}>Sell</button></div>`
    }
).join("")

//adding event listners to all "Sell" buttons
export const addEventListenerToSellButtons = () => {
    const sellButtons = document.querySelectorAll(".sell")
    sellButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const objItem = productObjects.find((item) => item.name === btn.getAttribute("id"))
            objItem.sell()
            refreshItem(btn, objItem)
        })
    })
}
//fx which will replace old data with new one after .sell() opration
const refreshItem = (element, object) => {
    element.previousElementSibling.innerHTML = `${object.name} (${object.quantity} pieces left) for ${object.price}`
}
