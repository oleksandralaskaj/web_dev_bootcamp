import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useUserContext} from "../contexts/UserContext";
import {Form} from "../components/Form";
import styles from "./Login.module.scss"
import {Link} from "../components/Link";
import {MoveRight} from "lucide-react";


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
            <button onClick={() => navigate('/')}>home</button>
        </>
    }

    return <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>Sign in, if you know it here</h1>
            <h2 className={styles.subtitle}>If you don't have an account jet, <Link to={'/register'}> register →</Link>
            </h2>
        </div>
        <Form inputs={values}
              action={'/login'}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              buttonText={'Login'}/>
    </div>
}
