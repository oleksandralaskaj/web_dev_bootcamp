import {useContext} from "react";
import ThemeContext from "../ThemeContext.js";

export function Background() {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            <button onClick={() => {
                setTheme(theme === "page light" ? 'page dark' : 'page light')
            }}>Change theme</button>
        </div>
    )

}