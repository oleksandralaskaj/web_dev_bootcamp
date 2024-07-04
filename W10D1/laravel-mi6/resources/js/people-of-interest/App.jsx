import React, {useEffect, useState} from "react";
import {Home} from "./pages/Home.jsx";
import {Navigation} from "./common/Navigation.jsx";
import {People} from "./pages/People.jsx";
import {Missions} from "./pages/Missions.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {UserContext} from "./context/UserContext.jsx";
import {Register} from './pages/Register.jsx'
import {Login} from "./pages/Login.jsx";
import {Logout} from "./pages/Logout.jsx";

export const App = () => {
    const [content, setContent] = useState('')
    const [user, setUser] = useState(null)
    // const defineContent = () => {
    //     let contentComponent;
    //     switch (content) {
    //         case "" :
    //             contentComponent = <Home/>
    //             break;
    //         case "people-of-interest" :
    //             contentComponent = <People/>
    //             break;
    //         case "missions" :
    //             contentComponent = <Missions/>
    //             break;
    //     }
    //     return contentComponent
    // }

    const getUser = async () => {
        try {
            const res = await axios.get('api/user')
            setUser(res.data)
        } catch (error) {
            setUser(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <UserContext.Provider value={{user, setUser, getUser}}>
            <BrowserRouter>
                <Navigation content={content} handler={setContent}/>
                <div className="main">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        {
                            user ?
                                <>
                                    <Route path='/people-of-interest' element={<People/>}/>
                                    <Route path='/missions' element={<Missions/>}/>
                                    <Route path='/logout' element={<Logout/>}/>
                                </> :
                                <>
                                    <Route path='/register' element={<Register/>}/>
                                    <Route path='/login' element={<Login/>}/>
                                </>
                        }
                    </Routes>
                </div>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
