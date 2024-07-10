import {Link as ReactRouterLink, To} from "react-router-dom";
import {PropsWithChildren} from "react";
import styles from './Link.module.scss'
import React from 'react';

type Props = PropsWithChildren<{
    to: To;
}>

export const Link = ({to, children}: Props) => {
    return <div>
        <ReactRouterLink to={to} className={styles.link}>{children}</ReactRouterLink>
    </div>
}
