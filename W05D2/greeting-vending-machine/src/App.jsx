import './App.scss'
import {Greeting} from "./Greeting.jsx"
import {useState} from "react";

const unknownUserGreeting = "Please provide us information so we can sell it to advertisers"

function App() {
    const [haveData, sethaveData] = useState(false)
    const [userGreeting, setUserGreeting] = useState(unknownUserGreeting)
    const [name, setName] = useState("")
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const personalizedGreeting = () => {
            switch (true) {
                case gender === "male":
                    return "Mr."
                case gender === "female" && age < 30:
                    return "Miss"
                case gender === "female" && age > 30:
                    return "Mrs."
                default:
                    return "dear"
            }
        }
        const newGreeting = 'Hello, ' + personalizedGreeting() + " " + name
        setUserGreeting(newGreeting)
        setGender("male")
        setName("")
        setAge("")
        sethaveData(true)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
        console.log(gender)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }
    return (
        <>
            <Greeting greeting={userGreeting}/>
            {!haveData ? <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br/>
                    <input type="text" value={name} onChange={handleNameChange}/>
                </label>
                <br/>
                <label>
                    Age:
                    <br/>
                    <input type="number" value={age} onChange={handleAgeChange}/>
                </label>
                <br/>
                <label>
                    Pick your gender:
                    <br/>
                    <select value={gender} onChange={handleGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form> : <button onClick={() => {
                sethaveData(false)
                setUserGreeting(unknownUserGreeting)
            }}>Relode?</button>}
        </>
    )
}

export default App
