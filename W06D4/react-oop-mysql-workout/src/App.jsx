import {List} from './List/List'
import {useState} from "react";

function App() {
    const baseURl = 'http://www.excerses.test/W06D4/react-oop-mysql-workout/endpoint.php'
    let [url, setURL] = useState(baseURl)

    return <>
        <button
            onClick={() => setURL(`${baseURl}?orderby=name`)}>?orderby=name
        </button>
        <br/>
        <button onClick={() => setURL(`${baseURl}?orderby=name&mode=asc`)}>?orderby=name&mode=asc</button>
        <br/>
        <button onClick={() => setURL(`${baseURl}?orderby=name&mode=desc`)}>?orderby=name&mode=desc</button>
        <br/>
        <button onClick={() => setURL(`${baseURl}?orderby=rating`)}>?orderby=rating</button>
        <br/>
        <button onClick={() => setURL(`${baseURl}?orderby=rating&mode=asc`)}>orderby=ratinge&mode=asc</button>
        <br/>
        <button onClick={() => setURL(`${baseURl}?orderby=name&mode=desc`)}>?orderby=rating&mode=desc</button>
        <br/>
        <List url={url}/>
    </>
}

export default App
