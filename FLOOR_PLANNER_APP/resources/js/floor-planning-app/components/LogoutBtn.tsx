import React from 'react';
import axios from "axios";
import {useUserContext} from "../contexts/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import styles from './Link.module.scss'
import {Link} from "./Link";

export const LogoutBtn = () => {
    const {getUser} = useUserContext()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const res = await axios.post('/logout')
            getUser()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return <div onClick={handleLogout}><Link to={'/'} type={'button'}>Logout</Link></div>
}
