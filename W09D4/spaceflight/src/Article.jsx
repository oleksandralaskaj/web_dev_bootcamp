import {Link} from "react-router-dom";

export const Article = ({article}) => {
    return (
        <div>
            <p>{article.title}</p>
            <Link to={`/articles/${article.id}`}><button>Detail</button></Link>
        </div>
    )
}