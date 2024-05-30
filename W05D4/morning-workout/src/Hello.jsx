import {useEffect, useState} from "react";

export const GetCatFact = () => {
    const [fact, setFact] = useState(null);
    const fetchCatFact = async () => {
        const response = await fetch(
            `https://catfact.ninja/fact`);
        const parsedResponse = await response.json();
        setFact(parsedResponse.fact)
    };
    useEffect(() => {
        fetchCatFact()
    }, [])
    return <p>{fact}</p>
}