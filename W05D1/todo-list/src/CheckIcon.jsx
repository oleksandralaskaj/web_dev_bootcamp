import {useState} from 'react';


export const CheckIcon = () => {
    const [adress, setAdress] = useState("cross.svg")
    const handleClick = () => {
        switch (adress) {
            case "cross.svg":
                setAdress("check.svg");
                break
            case "check.svg":
                setAdress("question.svg")
                break
            case "question.svg":
                setAdress("cross.svg")
        }
    }

    return (
        <div style={{backgroundImage: `url(${adress})`}} className="icon" onClick={handleClick}></div>
    )

}