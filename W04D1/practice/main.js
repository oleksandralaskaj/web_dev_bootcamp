import SectionInBody from "./scripts/SectionInBody.js"
import {addEventListenerToSellButtons, productContent} from "./scripts/excerciseProductList.js";
import {busContentForHTML, busOne, activateButtonsOfBus} from "./scripts/exerciseBusRide.js";


////////////////Product display + sell button////////////////////
const scProducts = new SectionInBody("product", "Product list", "Create a list of products form array with names using Product class, display it with button, which will call method sell().", 1)

scProducts.add()

scProducts.addInteraction(() => {
    scProducts.printResult(productContent)
    addEventListenerToSellButtons()
})


////////////////Product display + sell button////////////////////
const scBus = new SectionInBody("bus", "Bus on the roud", "Create a class called Bus representing a bus going from Prague to Vienna. The bus will have these properties: direction, stations, seats, passengers, last_station.In the class Bus create these methods, current() returns the name of the station the bus last stopped in, next() return name of next sration, move() moves bus 1 stop at a time, board(count) board count new passengers to the bus. If the number of passengers would be greater the number of seats after calling this method, just board only as many to fit in the bus. deboard(count) deboard count passengers from the bus. If the count is greater then the number of passengers on the bus just deboard those that are inside.", 1)

scBus.add()

scBus.addInteraction(() => {
    scBus.printResult(busContentForHTML(busOne))
    activateButtonsOfBus(busOne)
})