import React, { useState } from 'react'

const daftarBuah = () => {
    // state
    const [list, setList] = useState(
        [
            { nama: 'Semangka', harga: 10000, berat: 1000 },
            { nama: 'Anggur', harga: 40000, berat: 500 },
            { nama: 'Strawberry', harga: 30000, berat: 400 },
            { nama: 'Jeruk', harga: 30000, berat: 1000 },
            { nama: 'Mangga', harga: 30000, berat: 500 },
        ]
    )
    const [input, setInput] = useState({
        nama: '',
        berat: '',
        harga: '',
        index: -1
    })

    // handler
    const handleChange = (e) => {
        let value = e.target.value
        let resData = { ...input }
        switch (e.target.name) {
            case 'nama':
                resData.nama = value
                setInput({ ...resData })
                break
            case 'berat':
                resData.berat = value
                setInput({ ...resData })
                break
            case 'harga':
                resData.harga = value
                setInput({ ...resData })
                break
            default:
                console.log('Input not found')
                break
        }
    }

    const handleEdit = (e) => {
        let choosen = parseInt(e.target.value)
        let choice = list.filter((item, index) => {
            return index === choosen
        })
        choice.map((item) => {
            setInput({
                nama: item.nama,
                berat: item.berat,
                harga: item.harga,
                index: choosen
            })
            return true
        })
    }

    const handleDelete = (e) => {
        let choosen = parseInt(e.target.value)
        let choice = list.filter((item, index) => {
            return index !== choosen
        })
        setList([...choice])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let i = input.index
        if (i === -1) {
            setList([...list, input])
        } else {
            let resData = list
            resData[i] = input
            setList([...resData])
        }
        setInput({
            nama: '',
            berat: '',
            harga: '',
            index: -1
        })
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
                        list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.nama}</td>
                                    <td>{item.berat / 1000} Kg</td>
                                    <td>{item.harga}</td>
                                    <td><button onClick={handleEdit} className='btn' value={index}>Edit</button></td>
                                    <td><button onClick={handleDelete} className='btn' value={index}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <form onSubmit={handleSubmit}>
                Nama <input onChange={handleChange} type='text' name='nama' value={input.nama} />
                Berat <input onChange={handleChange} type='text' name='berat' value={input.berat} />
                Harga <input onChange={handleChange} type='text' name='harga' value={input.harga} />
                <input type='submit' value='kirim' />
            </form>
        </>
    )
}

export default daftarBuah