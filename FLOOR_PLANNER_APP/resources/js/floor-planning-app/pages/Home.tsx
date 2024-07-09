import React from 'react';
import {Link} from "react-router-dom";

export const Home=()=> {
    return <>
        <br/>
        <Link to='/register'>Register</Link>
        <br/>
        <Link to='/login'>login</Link>
        <br/>
        <Link to='/planner'>Planner</Link>
    </>
}
