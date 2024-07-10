import React, {useEffect} from 'react';
import {useUserContext} from "../contexts/UserContext";
import {LogoutBtn} from "./LogoutBtn";
import {Link} from "./Link";
import styles from './Navigation.module.scss'
import {PencilRuler} from "lucide-react";

export const Navigation = () => {
    const {user} = useUserContext()

    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.logo}>
                <PencilRuler/>
                <p>FloorPlanner</p>
            </div>
            {!user ?
                <div className={styles.login}>
                    <Link to={'/register'} type={'regular'}>Register</Link>
                    <Link to={'/login'} type={'button'}>Login</Link>
                </div> :
                <div className={styles.login}>
                    <p>Hello, {user.first_name}</p>
                    <LogoutBtn/>
                </div>
            }

        </div>
    </div>
}
