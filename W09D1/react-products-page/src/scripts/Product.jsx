
// eslint-disable-next-line react/prop-types
export function Product({id, img_url, name}) {
    return (
        <div className="product" id = {id}>
            <img
                src={img_url}
                alt={name}/>
            <div className="name">{name}</div>
        </div>
    )
}