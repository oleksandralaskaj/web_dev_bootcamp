import React, {useState} from "react";
import {MissionList} from "../components/MissionList.jsx";
import {MissionEditForm} from "../components/MissionEditForm.jsx";

export const Missions = () => {
    const [missionId, setMissionId] = useState('')

    return (
        <div>
            {missionId ?
                <MissionEditForm missionId={missionId} handler={setMissionId}/> :
                <MissionList handler={setMissionId}/>}
        </div>)
}
