import { useState, useEffect } from 'react';
import { Game } from '../Game/Game';

export const List = (props) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const loadData = () => {
        if (props.url) {
            fetch(props.url)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                    console.log(data)
                })
        }
    }

    useEffect(() => {
        loadData()
    },[props.url])

    return (
        <div className="games">
            {
                loading ?
                <div className="message">Loading...</div>
                :
                <>
                    <h1>List of games</h1>
                    {data.map(item => (
                        <Game key={ item.name } { ...item } />
                    ))}

                </>
            }
        </div>
    )
}