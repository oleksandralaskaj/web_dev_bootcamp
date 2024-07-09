import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import axios from "axios";

interface User {
    id: number;
    username: string;
    first_name: string;
    surname: string;
    role_id: number;
    email: string;
    email_verified_at: string | null;
    password: string;
    remember_token: string | null;
    created_at: string | null;
    updated_at: string | null;
}

interface UserContextType {
    user: User,
    getUser: () => {}
}

const UserContext = createContext<UserContextType>(null);

export const UserContextProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser]: { UserContextType } = useState(null)
    const getUser = async (): Promise<void> => {
        try {
            const res = await axios.get('api/user')
            setUser(res.data)
        } catch (error) {
            setUser(null)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{user, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(UserContext)
}
