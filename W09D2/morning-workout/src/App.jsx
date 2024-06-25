import {useState} from 'react'
import './App.css'
import {Box} from "./Box.jsx";
import {Button} from "./Button.jsx";

function App() {
    const [boxTop, setBoxTop] = useState(0)
    const [boxLeft, setBoxLeft] = useState(0)

    const handleUpDown = (delta) =>
        setBoxTop(boxTop => (boxTop + 50 * delta > 0 ? boxTop + 50 * delta : 0))

    const handleRightLeft = (delta) =>
        setBoxLeft(boxLeft => (boxLeft + 50 * delta > 0 ? boxLeft + 50 * delta : 0))
    return (
        <>
            <div className='buttons'>
                <Button handler={handleUpDown} delta={-1} name='Up'/>
                <Button handler={handleUpDown} delta={1} name='Down'/>
                <Button handler={handleRightLeft} delta={-1} name='Left'/>
                <Button handler={handleRightLeft} delta={1} name='Right'/>
            </div>
            <Box top={boxTop} left={boxLeft}/>
        </>
    )
}

export default App
