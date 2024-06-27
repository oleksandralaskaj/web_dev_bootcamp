import {Article} from './Article.jsx'
export const ArticleList = ({articles}) => {
    return (
        <>
            {articles.map((article) => <Article key={article.id} article={article}/>)}
        </>
    )
}