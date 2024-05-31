import {useEffect, useState} from "react";

export const GetCatFact = () => {
    const [fact, setFact] = useState(null);

    const fetchCatFact = async () => {
        const response = await fetch(
            `http://www.excerses.test/W05D5/morning-workout/`);
        const parsedResponse = await response.json();
        setFact(parsedResponse.fact)
    };
    useEffect(() => {
        fetchCatFact()
    }, [])
    return <><p>{fact}</p>
        <button onClick={fetchCatFact}>New fact</button>
    </>
}