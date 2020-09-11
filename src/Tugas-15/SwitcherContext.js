import React, { useState, createContext } from 'react'

export const SwitcherContext = createContext()

export const SwitcherProvider = (props) => {
    const [theme, setTheme] = useState('')

    return (
        <SwitcherContext.Provider value={[theme, setTheme]}>
            {props.children}
        </SwitcherContext.Provider>
    )
}