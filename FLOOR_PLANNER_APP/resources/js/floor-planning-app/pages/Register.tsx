import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUserContext} from "../contexts/UserContext";
import {Form} from "../components/Form";
import styles from "./Login.module.scss";
import {Link} from "../components/Link";

export function Register(props) {
    const {user, getUser} = useUserContext();
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

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();
        try {
            const response = await axios.post('/register', values);
            const response_data = response.data;
            getUser();
            navigate('/');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log('register error ', error)
            }
        }
    }

    useEffect(() => {
        console.log(values)
    }, [values])

    if (user) {
        return <>
            <p>You are already logged in, return home'</p>
            <button onClick={() => navigate('/')}>home</button>
        </>
    }

    return <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>Register, dear newbie</h1>
            <h2 className={styles.subtitle}>You've got your account already? Then, <Link to={'/login'}> sign in →</Link>
            </h2>
        </div>
        <Form inputs={values}
              action={'/register'}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              buttonText={'Register a new account'}/>

    </div>
}
