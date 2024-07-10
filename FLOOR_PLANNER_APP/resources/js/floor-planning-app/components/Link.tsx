import {Link as ReactRouterLink, To} from "react-router-dom";
import React, {PropsWithChildren} from "react";
import styles from './Link.module.scss'

type Props = PropsWithChildren<{
    to: To;
    type: 'button' | 'link'
}>

export const Link = ({to, children, type}: Props) => {
    return <div className={type === 'button'? styles.container : ''}>
        <ReactRouterLink to={to} className={`${styles.link} ${styles[type]}`}>{children}</ReactRouterLink>
    </div>
}
