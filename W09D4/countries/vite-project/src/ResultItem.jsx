

export function ResultItem ({data}) {
    console.log(data.name)
    return (
        <div>{data.name.common}</div>
    )
}