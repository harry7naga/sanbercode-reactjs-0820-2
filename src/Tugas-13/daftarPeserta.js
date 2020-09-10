import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DaftarPeserta = () => {
    const [dataPeserta, setDataPeserta] = useState(null)
    const [input, setInput] = useState({ name: "", id: null })

    useEffect(() => {
        if (dataPeserta === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/contestants`)
                .then(res => {
                    setDataPeserta(res.data)
                    console.log(res.data)
                })
        }
    }, [dataPeserta])

    const submitForm = (event) => {
        event.preventDefault()
        if (input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/contestants`, { name: input.name })
                .then(res => {
                    var data = res.data
                    setDataPeserta([...dataPeserta, { id: data.id, name: data.name }])
                    setInput({ id: null, name: "" })
                })
        } else {
            axios.post(`http://backendexample.sanbercloud.com/api/contestants/${input.id}`, { name: input.name })
                .then(res => {
                    var newDataPeserta = dataPeserta.map(x => {
                        if (x.id === input.id) {
                            x.name = input.name
                        }
                    })
                    setDataPeserta(newDataPeserta)
                    setInput({ id: null, name: "" })
                })
        }
    }

    const deletePeserta = (event) => {
        var idPeserta = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${idPeserta}`)
            .then(res => {
                var newDataPeserta = dataPeserta.filter(x => x.id !== idPeserta)
                setDataPeserta(newDataPeserta)
            })
    }

    const changeInputName = (event) => {
        var value = event.target.value
        setInput({ ...input, name: value })
    }

    const editForm = (event) => {
        var idPeserta = parseInt(event.target.value)
        var peserta = dataPeserta.find(x => x.id === idPeserta)

        setInput({ id: idPeserta, name: peserta.name })
    }

    return (
        <>
            <div style={{ width: "70vw", margin: "0 auto" }}>
                <h1 style={{ textAlign: "center" }}>Daftar Peserta Lomba</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataPeserta !== null && dataPeserta.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <button value={item.id} style={{ marginRight: "5px" }} onClick={editForm}>Edit</button>
                                            <button value={item.id} onClick={deletePeserta}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br />
                <br />
                <form style={{ textAlign: "center" }} onSubmit={submitForm}>
                    <strong style={{ marginRight: "10px" }}>Nama</strong>
                    <input required type="text" value={input.nameName} onChange={changeInputName} />
                    <button>Save</button>
                </form>
            </div>
        </>
    )
}

export default DaftarPeserta