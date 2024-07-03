import React from "react";
import {useEffect, useState} from "react";
import {PeopleList} from "../components/PeopleList.jsx";
import {PersonDetail} from "../components/PersonDetail.jsx";


export const People = () => {
    const [personId, setPersonId] = useState(null)

    return (
        <div>
            <h1>People of interest</h1>
            {
                personId ?
                <PersonDetail personId={personId} handler={setPersonId}/> :
                <PeopleList handler={setPersonId}/>
            }
        </div>
    )
}
