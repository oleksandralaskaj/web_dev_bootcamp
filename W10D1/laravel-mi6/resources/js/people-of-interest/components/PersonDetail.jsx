import React, {useEffect, useState} from "react";

export const PersonDetail = ({personId, handler}) => {
    const [data, setData] = useState(null)
    console.log(personId)
    const getPerson = async () => {
        const res = await fetch(`/api/people/${personId}`)
        const personData = await res.json();
        console.log(personData)
        setData(personData)
    }
    useEffect(() => {
        getPerson()
    }, [])

    return (
        <div>
            <h3>Detail about person with ID {data?.id}</h3>
            {data?.image.path ? <img src={"/images/" + data?.image.path} alt={data?.image.id}/> :""}
            <p>Name: {data?.name} {data?.alias ? data?.alias : ""}.</p>
            <p>Status: {data?.status.name}{data?.status.id !== 1? ". "+data?.status_text :""}.</p>
            <p>Occupation: {data?.occupation ? data?.occupation :"unknown"}.</p>

            <button onClick={() => handler(null)}>Back home</button>
        </div>
    )
}
