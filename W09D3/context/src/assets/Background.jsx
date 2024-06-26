import {useThemeContext} from "../ThemeContext.jsx";

export function Background() {
    const {theme, setTheme} = useThemeContext()

    return (
        <div className={theme}>
            <button onClick={() => {
                setTheme(theme === "page light" ? 'page dark' : 'page light')
            }}>Change theme</button>
        </div>
    )

}