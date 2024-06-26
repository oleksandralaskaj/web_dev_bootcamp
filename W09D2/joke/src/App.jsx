import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [setup, setSetup] = useState('')
    const [delivery, setDelivery] = useState('')

    const getJoke = async () => {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any')
        const data = await res.json()
        if (data.type === 'twopart') {
            setSetup(data.setup)
            setDelivery('')
            setTimeout(() => setDelivery(data.delivery), 1000)
        } else {
            setSetup(data.joke)
            setDelivery('')
        }

    }

    useEffect(() => {
        getJoke();
    }, []);


    return (
        <>
            <p>{setup}</p>
            <p>{delivery}</p>
            <button onClick={getJoke}>New joke</button>
        </>)
}

export default App
