import React, {useEffect, useState} from "react";
import axios from "axios";

export const MissionList = ({handler}) => {

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get('/api/missions')
            setData(res.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    const sendMail = async (missionId) => {
        const res = await axios.post('api/missions/send-details', {
            mission_id: missionId
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>Missions list</h1>
            <button>Create new mission</button>
            <ol>
                {data.map((mission) => <li key={mission.id}>
                    <h3>"{mission.name}"</h3>
                    <p>Conducted in: {mission.year}</p>
                    <p>Outcome: {mission.outcome}</p>
                    <button onClick={() => handler(mission.id)}>Edit mission</button>
                    <button onClick={() => sendMail(mission.id)}>Send by mail</button>
                </li>)}
            </ol>
        </>
    )
}
