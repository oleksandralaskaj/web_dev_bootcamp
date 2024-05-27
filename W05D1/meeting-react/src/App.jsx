import {Term} from "./Term.jsx";
import {Question} from "./Question.jsx";

const App = () => {
    const terms = [{
        header: "Antidisestablishmentarianism",
        description: "A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales."
    }, {
        header: "Braggadocio",
        description: "Braggadocio means not only bragging, but bragging about something that’s not true. When your friend boasts of a private yacht, ten personal servants, and nightly caviar dinners, that’s braggadocio, unless he happens to live on the French Riviera."
    }, {
        header: "Estivation",
        description: "Estivation is when animals slow their activity for the hot, dry summer months. During a period of estivation, many reptiles go underground where it's cooler."
    }]

    return (<>
        <h1>Practocing React</h1>
        <h2>Complicated Terms Displayer</h2>
        <Term header={terms[0].header} description={terms[0].description}/>
        <Term header={terms[1].header} description={terms[1].description}/>
        <Term header={terms[2].header} description={terms[2].description}/>
        <h2>Quora Questions Displayer</h2>
        <Question title="How to boil perfect egg?"
                  text="Learn how to make hard boiled eggs perfectly every time! With this easy method, they'll be easy to peel and have vibrant yellow yolks."
                  answer='Put the pot over high heat and bring to a boil. Once the water is at a rolling boil, turn off the heat and cover the pot with the lid. Allow the eggs to sit in the hot water for the following times according to the desired doneness: 3 minutes for SOFT boiled; 6 minutes for MEDIUM boiled; 12 minutes for HARD boiled.'

        />
        <Question title="How to make home made hummus?"
                  text="My favorite hummus recipe! With a few simple tricks, you can make the best creamy, smooth homemade hummus, and yes, it’s better than store-bought."
                  answer='Add chickpeas and minced garlic to the bowl of a food processor. Puree until a smooth, powder-like mixture forms. While processor is running, add ice cubes, tahini, salt, and lemon juice. Blend for about 4 minutes or so. Spread in a serving bowl and add a generous drizzle of olive oil.'
        />
        <Question title="How to wash jeans?"
                  text="These days, a great pair of jeans is an investment and an absolute wardrobe essential."
                  answer="Fill a tub with a few inches of cold or lukewarm water. Mix in a gentle, color preserving detergent. Turn the jeans inside out, then lay flat in the tub. Don't bunch them or wrinkle them. Run them under the water to rinse. Hang up to dry."
        />
    </>)
}

export default App
