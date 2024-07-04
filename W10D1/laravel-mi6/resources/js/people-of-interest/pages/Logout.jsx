import axios from "axios";
import React, {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

export const Logout = () => {
    const {getUser} = useContext(UserContext)
const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const res = await axios.post('/logout')
            getUser()
            navigate('/')
        } catch (error) {

        }
    }
    return <button onClick={handleLogout}>Logout</button>

}
