import React, {useEffect, useState} from "react";
import axios from "axios";

export const MissionEditForm = ({missionId, handler}) => {

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

    useEffect(() => {
        getData()
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
        </>
    )
}
