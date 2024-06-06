import React, {useEffect, useState} from "react";


export const Fact = () => {
    let [celebrity, setCelebrity] = useState('')
    useEffect(() => {
        fetch(`http://www.excerses.test/W06D4/react-php-db/index.php`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCelebrity(data)
            })
    }, [])
    return <div>
        <h1>Celebrity Information:</h1>
        <ul>
            {Object.entries(celebrity).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}:</strong> {value}
                </li>
            ))}
        </ul>
    </div>
}

