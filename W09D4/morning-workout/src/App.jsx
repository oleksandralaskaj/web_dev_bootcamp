import {useEffect, useState} from 'react'
import './App.css'
import {SearchBar} from "./SearchBar.jsx";
import {SearchResult} from "./SearchResult.jsx";

function App() {
    const [searchQuery, setSearchQuery] = useState("cat");
    const [searchResult, setSearchResult] = useState([]);
    const [offset, setOffset] = useState(0);


    const getData = async () => {
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`)
        const data = await res.json()
        console.log(data)
        setSearchResult(data.query.search)
    }

    return (
        <div style={{"display": "flex", "flexDirection":"column"}}>
            <SearchBar handlerQuery={setSearchQuery} querySubmit={() => getData()} value={searchQuery}/>
            <SearchResult data={searchResult}/>
            <button onClick={() => {
                setOffset(offset=>offset + 10)
                getData();
            }}>Next page</button>
            <button onClick={() => {
                setOffset(offset=>offset - 10)
                getData();
            }}>Previous page</button>
        </div >
    )
}

export default App
