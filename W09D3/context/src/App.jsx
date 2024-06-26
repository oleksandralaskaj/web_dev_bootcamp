import './App.css'
import {ThemeContextProvider} from './ThemeContext.jsx'
import {Background} from "./assets/Background.jsx";

function App() {
    return <ThemeContextProvider>
        <Background/>
    </ThemeContextProvider>
}

export default App
