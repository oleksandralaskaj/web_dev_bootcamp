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
                </li>)}
            </ol>
        </>
    )
}
