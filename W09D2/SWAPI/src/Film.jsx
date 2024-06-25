export function Film({data}) {
    return (
        <div className='film'>{data.title} by {data.director} ({data.release_date.substring(0,4)})</div>
    )
}