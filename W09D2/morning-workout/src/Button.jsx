
export function Button ({handler, delta, name}) {
    return (
        <>
        <button onClick={()=>handler(delta)}>{name}</button>
        </>
    )


}