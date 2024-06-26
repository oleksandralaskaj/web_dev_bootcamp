import {createContext, useContext, useState} from 'react';

const ThemeContext = createContext({theme: 'light', setTheme: () => console.error('lol no provider')});

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('page light')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}