import {useState} from "react";

export const Seat = ({type, number}) => {
    const [color, setColor] = useState(type)
    const clickhandler = () => {
        if (color === "free") {
            setColor("selected")
        } else if(color ==="selected") {
            setColor("free")
        }
    }
    return <svg
        className="train-seat"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        onClick={clickhandler}
    >
        <g className={"train-seat__seat train-seat__seat--" + color}>
            <rect x="10" y="15" width="80" height="70" rx="15" ry="15"/>
            <rect x="30" y="10" width="52" height="15" rx="3" ry="3"/>
            <rect x="30" y="75" width="52" height="15" rx="3" ry="3"/>
            <rect x="70" y="10" width="20" height="80" rx="9.821" ry="10"/>
        </g>

        <text className="train-seat__number" x="25" y="60">
            {number}
        </text>
    </svg>
}