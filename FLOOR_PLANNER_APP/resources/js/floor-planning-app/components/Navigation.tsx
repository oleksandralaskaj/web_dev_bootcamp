import {useUserContext} from "../contexts/UserContext";
import React from 'react';
import {LogoutBtn} from "./LogoutBtn";
import {Link} from "./Link";

export const Navigation = () => {
    const {user} = useUserContext()

    if (user) {
        return <>user is logged in <br/>
            <LogoutBtn/></>
    }
    return <>
        <nav>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
        </nav>
    </>
}
