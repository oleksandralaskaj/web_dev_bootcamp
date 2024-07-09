import React, {useState, useEffect, useContext} from 'react';
import {useUserContext} from "../contexts/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function Login(props) {
    const {getUser} = useUserContext();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        // with axios
        try {
            // make the AJAX request
            const response = await axios.post('/login', values);
            // get the (already JSON-parsed) response data
            const response_data = response.data;
            getUser();
            navigate('/')
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

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
        //laravel knows what to do ones redirected to that route
        <form action="/login" method="post" onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label> <br/>
            <input type="email" id='email' name="email" value={values.email} onChange={handleChange}/> <br/>

            <label htmlFor="password">Password</label> <br/>
            <input type="password" id='password' name="password" value={values.password} onChange={handleChange}/> <br/>

            <button>Login</button>
        </form>
    );
}
