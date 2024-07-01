export function SearchBar({query, setQuery, runSearch}) {

    return (
        <>
            <h1>Search in Countries database</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Insert country name...'/>
            <button onClick={runSearch}>Search</button>
        </>
    )

}