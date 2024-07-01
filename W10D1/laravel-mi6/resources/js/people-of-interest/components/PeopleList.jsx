import React, {useEffect, useState} from "react";

export const PeopleList = ({handler}) => {
    const [people, setPeople] = useState([])

    const getPeople = async () => {
        const res = await fetch('/api/people-of-interest')
        const data = await res.json()
        console.log(data)
        setPeople(data)
    }
    useEffect(() => {
        getPeople()
    }, [])


    return (
        <ul>
            {
                people.map((person) => <li key={person.id}>
                    <p>{person.name}</p>
                    <button onClick={() => handler(person.id)}>Detail</button>
                </li>)
            }
        </ul>
    )
}
