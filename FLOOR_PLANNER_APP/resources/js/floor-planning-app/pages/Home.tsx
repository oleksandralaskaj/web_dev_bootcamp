import React from 'react';
import styles from './Home.module.scss'
import {Button} from "../components/Button";
import {Link} from "../components/Link";


export const Home = () => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Floor planner</h1>
                <h2 className={styles.subtitle}>An app created as a web development bootcamp final project, striving to
                    solve a real issue. </h2>
                <p className={styles.paragraph}>Floor Planner emerged from my desire to bridge the gap for
                    non-professionals
                    seeking an intuitive floor plan tool. As a junior developer, I empathized with real estate agents
                    and
                    homeowners struggling to visualize spaces. Inspired by their challenges, I embarked on a mission to
                    create a user-friendly solution.
                </p>
                <p className={styles.paragraph}>
                    Leveraging React, Typescript, and Laravel, Floor Planner was born—a
                    platform that simplifies floor plan creation. With its drag-and-drop interface, users can sketch
                    rooms,
                    add doors, windows, and even resize elements. Whether you’re planning your dream home or preparing a
                    property listing, Floor Planner empowers everyone to design with confidence.
                </p>
                <Link to={'/planner'}><Button type={'active'}>Start drawing</Button></Link>
            </div>
            <div className={styles.image}></div>
        </div>
    </div>
}
