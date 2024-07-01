import React from "react";
import {useEffect, useState} from "react";
import {PeopleList} from "./PeopleList.jsx";
import {PersonDetail} from "./PersonDetail.jsx";

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
