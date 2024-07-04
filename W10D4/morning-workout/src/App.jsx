import {useEffect, useState} from 'react'

import './App.css'

function App() {
    const [array, setArray] = useState([])
    const createNumbers = () => {
        const numbers = [];
        for (let number = 1; number <= 100; number++) {
            numbers.push(number)
        }
        setArray(numbers)
    }

    const fizzbuzz = (number) => {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz'
        } else if (number % 3 === 0) {
            return 'Fizz'
        } else if (number % 5 === 0) {
            return 'Buzz'
        }
        return number
    }
    useEffect(() => {
        createNumbers()
    }, []);


    useEffect(() => {
        console.log(array.map((number) => fizzbuzz(number)).join(', '))
    }, []);


    if (!array.length) return null

    return (
        <>
            {array.map((number) => fizzbuzz(number)).join(', ')}
        </>
    )
}

export default App
