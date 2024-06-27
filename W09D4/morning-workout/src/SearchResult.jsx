import {Result} from "./Result.jsx";

export function SearchResult ({data}) {
    return (
        <>
            {data.map((result)=> <Result key={result.pageid} data={result} />)}
        </>
    )
}