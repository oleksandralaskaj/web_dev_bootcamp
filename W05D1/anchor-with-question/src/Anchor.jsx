import {useState} from "react";

export const Anchor = ({href, title}) => {
    let [count, setCount] = useState(0)

    if (count < 2) {
        return (<div>
            <span className={count === 0 ? "hidden" : ""}>Are you sure?</span>
            <button onClick={() => {
                setCount(count + 1)
            }}>{title}</button>
        </div>)
    }

    return <div>
        <span>Are really you sure? </span>
        <a href={href} target="_blank">{title}</a>
    </div>
}