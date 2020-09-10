import React, { useState, createContext } from 'react'

export const FruitContext = createContext()

export const FruitProvider = props => {
    const [fruits, setFruits] = useState(null)
    const [api] = useState(`http://backendexample.sanbercloud.com/api/fruits`)
    const [input, setInput] = useState({
        name: '',
        weight: 0,
        price: 0,
        id: 0
    })

    return (
        <FruitContext.Provider value={[fruits, setFruits, input, setInput, api]}>
            {props.children}
        </FruitContext.Provider>
    )
}