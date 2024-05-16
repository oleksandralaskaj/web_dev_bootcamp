const dog = {
    name: "Jack",
    activities: [
        "bark",
        "eat",
        "walk"
    ],
    info: {
        ID: 1233456789,
        hasChip: true,
        owner: "Lily"
    }
}
// accesing innners of object
console.log(dog.name)
console.log(dog.info.hasChip)
console.log(dog.activities[dog.activities.length - 1])
console.log(`Dog named ${dog.name} has owner named ${dog.info.owner}.`)

/// loops over object
for (let key in dog) {
    console.log(key)
}
Object.values(dog).forEach((value) => console.log(value))

// Json en/desoding

const encodedDog = JSON.stringify(dog)
console.log(encodedDog)
const decodedDog = JSON.parse(encodedDog)
console.log(decodedDog)

// Higher order functions
const addition = (number1, number2) => {
    return number1 + number2;
}
console.log(addition(2,3))
const operation = {
    addition: (op1, op2) => op1+op2,
    substraction: (op1, op2) => op1-op2,
    multiplication: (op1, op2) => op1*op2,
    division: (op1, op2) => op1/op2,
}
console.log("addition 10 and 2 resulting", operation.addition(10,2))
console.log("substtraction 10 and 2 resulting", operation.substraction(10,2))
console.log("multiplication 10 and 2 resulting", operation.multiplication(10,2))
console.log("division 10 and 2 resulting", operation.division(10,2))
let currentWeather = 'rainy';
const whatShouldIDo = (weather) => {
    if(weather === 'sunny') {
        return () => {
            console.log('Going for a walk')
            return weather
        }
    } else if (weather === 'rainy') {
        return () => {
            console.log('Nap time')
            return weather
        }
    }
}
console.log(whatShouldIDo(currentWeather)())

const run = () => {
    return 'running';
}
const move = (movement) => {
    return console.log(movement());
}
move(run)

//Events

const button = document.querySelector("#buttonToClick")
button.addEventListener("click", (event) => {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    console.log("button was clicked")
})