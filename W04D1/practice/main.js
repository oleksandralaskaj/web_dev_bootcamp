import SectionInBody from "./scripts/SectionInBody.js"
import {addEventListenerToSellButtons, productContent} from "./scripts/excerciseProductList.js";


////////////////Product display + sell button////////////////////
const scProducts = new SectionInBody("product", "Product list", "Create a list of products form array with names using Product class, display it with button, which will call method sell().", 1)
scProducts.add()

scProducts.addInteraction(()=>{
    scProducts.printResult(productContent)
    addEventListenerToSellButtons()
})


////////////////Product display + sell button////////////////////
const scBus = new SectionInBody()