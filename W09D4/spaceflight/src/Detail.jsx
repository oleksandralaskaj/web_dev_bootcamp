import {Link, useLoaderData, useParams} from "react-router-dom";

export const Detail = () => {

    const {articleId} = useParams()
    const data = useLoaderData()

    return (<>
        <p>{articleId}</p>
        <h3>{data.news_site}</h3>
        <h1>{data.title}</h1>
        <h2>{data.summary}</h2>
        <Link to='/'><button>Home</button></Link>
    </>)

}