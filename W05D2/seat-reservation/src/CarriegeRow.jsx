import {Seat} from "./Seat.jsx";

export const CarriegeRow = ({rowNumber}) => {
    const statuses = []
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 2 + 1)
        switch (randomNumber) {
            case 1:
                statuses.push("free")
                continue
            case 2:
                statuses.push("occupied")
        }
    }

    return <div className="carriage-row">
        <Seat type={statuses[0]} number={rowNumber + 0}/>
        <Seat type={statuses[1]} number={rowNumber + 2}/>
        <div className="aisle-spacer"></div>
        <Seat type={statuses[2]} number={rowNumber + 2}/>
        <Seat type={statuses[3]} number={rowNumber + 4}/>
    </div>
}