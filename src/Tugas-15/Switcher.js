import React, { useContext, useEffect } from 'react'

import { SwitcherProvider, SwitcherContext } from './SwitcherContext'
import Nav from './Nav'

const ThemeChoice = () => {
    const [theme, setTheme] = useContext(SwitcherContext)

    useEffect(() => {
        if (theme === '') {
            setTheme('nav-light')
        }
    })

    const handleChange = (e) => {
        setTheme(e.target.value)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <input onChange={handleChange} type='radio' name='theme' value='nav-light' /> Light
            <input onChange={handleChange} type='radio' name='theme' value='nav-dark' /> Dark
        </div>
    )
}

const Switcher = () => {
    return (
        <SwitcherProvider>
            <Nav />
            <br />
            <ThemeChoice />
        </SwitcherProvider>
    )
}

export default Switcher