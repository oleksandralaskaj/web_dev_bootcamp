import React from "react";

export function Burger({onClick, text}) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}
