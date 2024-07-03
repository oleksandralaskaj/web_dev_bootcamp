import React, {useEffect, useState} from "react";

export const PersonDetail = ({personId, handler}) => {
    const [data, setData] = useState(null)
    const getPerson = async () => {
        console.log(personId)
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
            <button onClick={() => handler(null)}>Back home</button>

            <h3>Detail about person with ID {data?.id}</h3>
            {data?.image.path ? <img src={"/images/" + data?.image.path} alt={data?.image.id}/> :""}
            <p>Name: {data?.name}
                {data?.aliases?.map((item)=>" /a.k.a " + item.alias )}.</p>
            <p>Status: {data?.status_text}.</p>
            <p>Occupation: {data?.occupation ? data?.occupation :"unknown"}.</p>

        </div>
    )
}
