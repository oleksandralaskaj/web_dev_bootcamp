import React, {createContext, FC, PropsWithChildren, ReactNode, useContext, useEffect, useState} from 'react';
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
    isLoading: boolean,
    setUser: (user: User) => {},
    getUser: () => Promise<void>
}

const UserContext = createContext<UserContextType>(null);

export const UserContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User>(null)
    const [isLoading, setIsLoading] = useState(false)
    console.log(user)
    const getUser = async (): Promise<void> => {
        try {
            setIsLoading(true)
            const res = await axios.get('api/user')
            setUser(res.data)
        } catch (error) {
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{user, isLoading, setUser, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
