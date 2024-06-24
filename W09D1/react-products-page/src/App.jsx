import {useState} from 'react'
import './App.css'
import {Header} from "./scripts/Header.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
        </>
    )
}

export default App
