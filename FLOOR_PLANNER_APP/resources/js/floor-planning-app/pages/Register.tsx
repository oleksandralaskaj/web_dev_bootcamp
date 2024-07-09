import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from "../contexts/UserContext.jsx";

export function Register(props) {
    const {getUser} = useUserContext();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        first_name: '',
        surname: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        // with axios
        try {
            // make the AJAX request
            const response = await axios.post('/register', values);
            // get the (already JSON-parsed) response data
            const response_data = response.data;

            getUser();
            navigate('/');
        } catch (error) {
            // if the response code is not 2xx (success)
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }

    useEffect(() => {
        console.log(values)
    }, [values])
    return (
        <form action="/register" method="post" onSubmit={handleSubmit}>
            <label htmlFor="username">User name</label> <br/>
            <input type="text" id='username' name="username" value={values.username} onChange={handleChange}/>
            <br/>

            <label htmlFor="first_name">First name</label> <br/>
            <input type="text" id='first_name' name="first_name" value={values.first_name} onChange={handleChange}/>
            <br/>

            <label htmlFor="surname">Surname</label> <br/>
            <input type="text" id='surname' name="surname" value={values.surname} onChange={handleChange}/>
            <br/>

            <label htmlFor="email">Email</label> <br/>
            <input type="email" id='email' name="email" value={values.email} onChange={handleChange}/> <br/>

            <label htmlFor="password">Password</label> <br/>
            <input type="password" id='password' name="password" value={values.password} onChange={handleChange}/> <br/>

            <label htmlFor="password_confirmation">Password confirmation</label> <br/>
            <input type="password" id='password_confirmation' name="password_confirmation"
                   value={values.password_confirmation}
                   onChange={handleChange}/> <br/>

            <button>Register</button>

        </form>
    );
}
