import {Outlet} from "react-router-dom";
import {ArticleList} from "./ArticleList.jsx";
import {useDataContext} from "./assets/DataContextProvider.jsx";
import {useEffect} from "react";

export const Home = () => {


    const {data, setData} = useDataContext();

    const getData = async() => {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles')
        const result = await response.json()
        setData(result.results)
    }

    useEffect(()=>{getData()}, [])
    return (
        <>
            <h1>Spaceflight News</h1>
            <ArticleList articles={data}/>
            <Outlet/>
        </>
    )
}