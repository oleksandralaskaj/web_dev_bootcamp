import {Likes} from "./Likes.jsx";

export const Answer = (props) => {
    return (
        <>
            <p>{props.answer}</p>
            <Likes/>
        </>
    )
}