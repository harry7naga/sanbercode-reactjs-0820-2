import React from 'react'
import { FruitProvider } from './FruitContext.js'
import FruitTable from './FruitList'
import FruitForm from './FruitForm.js'

const Fruit = () => {
    return (
        <FruitProvider>
            <FruitTable />
            <FruitForm />
        </FruitProvider>
    )
}

export default Fruit