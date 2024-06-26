import {useState} from 'react'
import './App.css'
import ThemeContext from './ThemeContext.js'
import {Background} from "./assets/Background.jsx";

function App() {
    const [theme, setTheme] = useState('page light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Background/>
        </ThemeContext.Provider>
    )
}

export default App
