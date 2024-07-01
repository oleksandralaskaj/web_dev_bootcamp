import {ResultItem} from "./ResultItem.jsx"

export function SearchResults({counties}) {
    return (
        <>
            {Array.isArray(counties) ?
                counties.map((country, index) => <ResultItem key={index} data={country}/>)
                : <ResultItem data={counties}/>}
        </>
    )
}