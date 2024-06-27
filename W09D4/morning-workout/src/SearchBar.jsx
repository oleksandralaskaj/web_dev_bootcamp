export function SearchBar({handlerQuery, querySubmit, value}) {
    return (
        <>
            <label>Search query:</label>
            <input type="text" onChange={(e) => handlerQuery(e.target.value)} value={value}/>
            <button onClick={querySubmit}>Search</button>
        </>
    )
}