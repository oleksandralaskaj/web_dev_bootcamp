import {SearchBar} from "./SearchBar.jsx";
import {useState} from "react";
import {SearchResults} from "./SearchResults.jsx";

export const Home = () => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const [result, setResult] = useState([] | "")

    const runSearch = async () => {
        console.log(query)
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}`)
        const data = await res.json()
        data.status === 404 ? setError(data.message) : setResult(data)
    }

    return (
        <>
            <SearchBar query={query} setQuery={setQuery} runSearch={()=>runSearch()}/>
            {result ? <SearchResults counties={result}/> : <p>to be loaded</p>}

        </>
    )
}