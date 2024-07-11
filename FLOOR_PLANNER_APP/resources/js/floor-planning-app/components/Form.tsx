import React, {ReactNode} from "react";
import * as string_decoder from "string_decoder";
import {Button} from "./Button";
import styles from "./Form.module.scss"

type Content = {
    inputs: { [key: string]: string },
    action: string,
    handleChange: (event: any) => void,
    handleSubmit: (event: Event) => Promise<void>,
    buttonText: string
}

export const Form = ({inputs, action, handleChange, handleSubmit, buttonText}: Content) => {

    const toTitle = (string: string) => {
        return string.charAt(0).toUpperCase() + string.replace("_", " ").slice(1)
    }

    function generateInputs(inputsObject: { [key: string]: string },): ReactNode {
        return Object.entries(inputsObject)
            .map(([key, value]) =>
                <div className={styles.item} key={key}>
                    <label htmlFor={key}>{toTitle(key)}</label>
                    <input type={key.includes('password') ? 'password' : "text"} id={key} name={key} value={value}
                           onChange={handleChange}/>
                </div>
            )
    }

    const inputFields = generateInputs(inputs)

    return <form action={action} method="post" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldBlock}>
            {
                inputFields
            }
        </div>
        <Button type={'active'}>{buttonText}</Button>
    </form>
}

