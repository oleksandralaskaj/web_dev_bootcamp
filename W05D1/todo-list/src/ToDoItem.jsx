
import {CheckIcon} from "./CheckIcon.jsx";

export const ToDoItem = (props) => {
    return (
        <>
            <div className="item">
                <CheckIcon/>
                <p>{props.decription}</p>
            </div>

        </>
    )
}