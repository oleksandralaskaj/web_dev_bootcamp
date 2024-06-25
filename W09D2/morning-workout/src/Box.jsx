
export function Box ({top, left}){
    const boxStyle = {
        position: 'absolute',
        top: top,
        left: left
    }

    return (
        <div className='box' style={boxStyle}></div>
    )
}