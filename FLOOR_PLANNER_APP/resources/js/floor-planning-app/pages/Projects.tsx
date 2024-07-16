import axios from "axios";
import React, {ReactNode, useEffect, useState} from "react";
import styles from "../components/Form.module.scss";
import {ProjectItem} from "./ProjectItem";
import {useUserContext} from "../contexts/UserContext";
import {useNavigate} from "react-router-dom";
import {Link} from "../components/Link";
import {Form} from "../components/Form";

type ProjectData = {
    id: number,
    user_id: number,
    title: string,
    data: JSON,
    created_at: string,
    updated_at: string | null,
}
export const Projects = () => {
    const [projects, setProjects] = useState<ProjectData[] | null>(null)
    const getProjects = async (): Promise<void> => {
        try {
            const res = await axios.get('api/projects')
            setProjects(res.data)
        } catch (error) {
            console.log('error fetching projects', error)
        }
    }
    useEffect(() => {
        getProjects()
    }, []);

    const {user} = useUserContext();

    const [title, setTitle] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`api/projects/store`, {
                title: title,
                user_id: user.id,
            });
            console.log('new project is created', response.data)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log('error creating new project', error)
            }
        }
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const content = projects?.map((item, index) =>
        <div key={index}>
            <ProjectItem title={item.title} created={item.created_at} updated={item.updated_at} project_id={item.id}/>
        </div>
    )

    return <>
        {projects ? content : <p>You have no projects create yet, so let's with creating one</p>}
        <Form inputs={{title: title}}
              action={`api/projects/store`}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              buttonText={'Create new project'}/>

    </>
}
