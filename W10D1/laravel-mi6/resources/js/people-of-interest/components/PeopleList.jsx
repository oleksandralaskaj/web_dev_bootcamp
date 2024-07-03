import React, {useEffect, useState} from "react";
import {StatusFilter} from "./StatusFilter.jsx";

export const PeopleList = ({handler}) => {
    const [people, setPeople] = useState([])
    const [selectedStatus, setSelectedStatus] = useState('')

    const getPeople = async () => {
        const url = selectedStatus ? '/api/people' + '?status=' + encodeURIComponent(selectedStatus) : '/api/people'
        const res = await fetch(url)
        const data = await res.json()
        setPeople(data)
    }
    useEffect(() => {
        getPeople()
    }, [selectedStatus])


    return (<>
        <div>
            <StatusFilter selectedStatus={selectedStatus} handler={setSelectedStatus}/>
        </div>
        <ol>
            {
                people.map((person) => <li key={person.id} className='person-in-list'>
                    <img src={"/images/" + person.image.path} alt="agent"/>
                    <p>{person.name}</p>
                    <button onClick={() => handler(person.id)}>Detail</button>
                </li>)
            }
        </ol>
    </>)
}
