import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useUserContext} from "../contexts/UserContext";


export function Login(props) {
    const {user, getUser} = useUserContext();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await axios.post('/login', values);
            const response_data = response.data;
            console.log('login success ', response_data)
            getUser();
            navigate('/')
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log('login error ', error)
            }
        }
    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    if (user) {
        return <>
            <p>You are already logged in, return home'</p>
            <button onClick={()=> navigate('/')}>home</button>
        </>
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
