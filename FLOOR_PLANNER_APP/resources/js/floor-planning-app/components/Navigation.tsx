import {useUserContext} from "../contexts/UserContext";
import React from 'react';
import {LogoutBtn} from "./LogoutBtn";

export const Navigation = () => {
    const {user} = useUserContext()

    if (user) {
        return <>user is logged in <br/>
            <LogoutBtn/></>
    }
    return "user is not logged in"
}
