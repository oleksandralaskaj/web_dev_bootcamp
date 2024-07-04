import React, {useEffect, useState} from "react";
import axios from "axios";

export const MissionEditForm = ({missionId, handler}) => {

    const [people, setPeople] = useState([])
    const [personId, setPersonId] = useState(null)
    const [data, setData] = useState(null)
    const [values, setValues] = useState({
        name: '',
        year: '',
        outcome: ''
    })

    const getData = async () => {
        const res = await axios.get('/api/missions/' + missionId)
        setData(res.data)
        setValues({
            name: res.data.name ?? '',
            year: res.data.year ?? '',
            outcome: res.data.outcome ?? ''
        })
    }

    const getPeople = async () => {
        const res = await axios.get('api/people')
        setPeople(res.data)
    }

    useEffect(() => {
        getData()
        getPeople()
    }, [])

    const handleChange = (event) => {
        setValues(values => {
            return ({
                ...values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/missions/store/' + missionId, values)
            getData()
        } catch (error) {
            console.log('Error', error)
        }

    }

    const handleAssignmentOfPeople = async (event) => {
        event.preventDefault();
        try {
            const data = {
                'personId': personId,
                'missionId': missionId
            }
            const res = await axios.post('/api/missions/assign-person', data)
            getData()
            setPersonId(null)
        } catch (error) {
            console.log('error happened', error)
        }
    }


    const handleUnAssignmentOfPeople = async (agentId) => {
        try {
            const data = {
                'personId': agentId,
                'missionId': missionId
            }
            const res = await axios.post('/api/missions/unassign-person', data)
            getData()
        } catch (error) {
            console.log('error happened', error)
        }
    }

    return (
        <>
            <button onClick={() => handler(null)}>Back to list</button>
            <h1>Edit mission #{values?.id}</h1>
            <form action="" method="post" onSubmit={handleSubmit}>

                <label htmlFor="name">Mission's name:</label> <br/>
                <input type="text" value={values?.name} id='name' name='name' onChange={handleChange}/> <br/>

                <label htmlFor="year">Year of conduct:</label> <br/>
                <input type="number" value={values?.year} id='year' name='year' onChange={handleChange}/> <br/>

                <label htmlFor="outcome">Outcome:</label> <br/>

                <select name="outcome" id="outcome" value={values?.outcome} onChange={handleChange}>
                    <option value="unknown">Unknown</option>
                    <option value="success">Success</option>
                    <option value="fail">Fail</option>
                </select> <br/>

                <button type={"submit"}>Submit changes</button>
            </form>

            <h2>Assign people to mission</h2>
            <form action="" method='post' onSubmit={handleAssignmentOfPeople}>
                <select name="people" value='1' id="people" onChange={(e) => setPersonId(e.target.value)}>
                    <option value={null}>Select a person</option>
                    {
                        people?.map(person => <option key={person.id} value={person.id}>{person.name}</option>)
                    }
                </select> <br/>
                <button type={"submit"}>Assign agent</button>
            </form>

            <h2>Already assigned people</h2>
            {data?.people.length > 0 ?
                data.people.map((person) => <div key={person.id}>
                    <span>{person.name}</span>
                    <button onClick={() => handleUnAssignmentOfPeople(person.id)}>Unassign</button>
                </div>) :
                "Nobody has been assigned yet to this mission."
            }
        </>
    )
}
