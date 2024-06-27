import {createContext, useContext, useState} from 'react';

const DataContext = createContext({data: [], setData: () => console.error('lol no provider')});

export function DataContextProvider({children}) {
    const [data, setData] = useState([])
    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}

export function useDataContext() {
    return useContext(DataContext);
}