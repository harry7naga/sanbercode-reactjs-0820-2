import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Tugas13 = () => {
    // states
    const [list, setList] = useState(null)
    const [api, setApi] = useState(`http://backendexample.sanbercloud.com/api/fruits`)
    const [input, setInput] = useState({
        name: '',
        weight: '',
        price: '',
        id: 0
    })

    // effects
    useEffect(() => {
        if (list === null) {
            Axios.get(api)
                .then((res) => {
                    setList(res.data)
                })
        }
    }, [list])

    // handles
    const handleChange = (e) => {
        let temp = input
        let value = e.target.value
        switch (e.target.name) {
            case 'nama':
                temp.name = value
                setInput({ ...temp })
                break
            case 'berat':
                temp.weight = value
                setInput({ ...temp })
                break
            case 'harga':
                temp.price = value
                setInput({ ...temp })
                break
            default:
                break
        }
    }

    const handleEdit = (e) => {
        let choosen = parseInt(e.target.value)
        let choice = list.filter((item) => {
            return item.id === choosen
        })
        setInput({
            name: choice[0].name,
            weight: choice[0].weight,
            price: choice[0].price,
            id: choice[0].id,
        })
    }

    const handleDelete = (e) => {
        let choosen = parseInt(e.target.value)
        Axios.delete(`${api}/${choosen}`)
            .then(res => {
                setList(null)
                setInput({
                    name: '',
                    weight: '',
                    price: '',
                    id: 0
                })
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let i = input.id
        if (i === 0) {
            Axios.post(api, input)
                .then(res => {
                    setList(null)
                    setInput({
                        name: '',
                        weight: '',
                        price: '',
                        id: 0
                    })
                })
        } else {
            Axios.put(`${api}/${input.id}`, input)
                .then(res => {
                    setList(null)
                    setInput({
                        name: '',
                        weight: '',
                        price: '',
                        id: 0
                    })
                })
        }
    }

    return (
        <>
            <table className='tbl'>
                <thead style={{ color: 'white' }}>
                    <tr>
                        <td>Nama</td>
                        <td>Berat</td>
                        <td>Harga</td>
                        <td colSpan={2}>Tombol Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list === null ? <tr></tr> :
                            list.map((item, index) => {
                                return (<tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.weight / 1000} Kg</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={handleEdit} value={item.id}>Edit</button></td>
                                    <td><button onClick={handleDelete} value={item.id}>Delete</button></td>
                                </tr>)
                            })
                    }
                    <tr></tr>
                </tbody>
            </table>
            <br />
            <form onSubmit={handleSubmit}>
                Nama <input onChange={handleChange} type='text' name='nama' value={input.name} />
                Berat <input onChange={handleChange} type='text' name='berat' value={input.weight} />
                Harga <input onChange={handleChange} type='text' name='harga' value={input.price} />
                <input type='submit' value='kirim' />
            </form>
        </>
    )
}

export default Tugas13