import {useState} from "react";

export const Anchor = ({href, title}) => {
    let [clicked, setClicked] = useState(false)

    if (!clicked) {
        return (<button onClick={() => {
            setClicked(true)
        }}>{title}</button>)
    }

    return <div>
        <span>Are you sure? </span>
        <a href={href} target="_blank">{title}</a>
    </div>
}