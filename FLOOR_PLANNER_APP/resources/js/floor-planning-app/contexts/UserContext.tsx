import React, {
    createContext,
    FC,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from 'react';
import axios from "axios";

type User = {
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

type UserContextType = {
    user: User,
    isLoaded: boolean,
    setUser: (user: User | null) => {},
    getUser: () => Promise<void>
}

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    console.log('user in context now is', user)
    const getUser = async (): Promise<void> => {
        try {
            const res = await axios.get('api/user')
            setUser(res.data)
        } catch (error) {
            setUser(null)
        } finally {
            setIsLoaded(true)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <UserContext.Provider value={{user, isLoaded, setUser, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
