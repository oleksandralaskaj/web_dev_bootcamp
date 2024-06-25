import './App.css'
import {useEffect, useState} from "react";
import {Film} from "./Film.jsx";

function App() {
    const [films, setFilms] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films');
            const data = await response.json()
            setFilms(data.results)

        } catch (error) {
            console.log("An error happened during fetching films: ", error)
        }
    }

    useEffect(() => {
         getData();
    }, []);

    return (
        <div>
            {films.map(film => <Film  key={film.episode_id} data={film}/>)}
        </div>
    )
}

export default App
