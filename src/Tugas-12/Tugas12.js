import React, { Component } from "react"

class Tugas12 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            namaBuah: [{ id: '1', nama: "Semangka", harga: 10000, berat: 1000 },
            { id: '2', nama: "Anggur", harga: 40000, berat: 500 },
            { id: '3', nama: "Strawberry", harga: 30000, berat: 400 },
            { id: '4', nama: "Jeruk", harga: 30000, berat: 1000 },
            { id: '5', nama: "Mangga", harga: 30000, berat: 500 }],
            inputNama: '',
        }
    }

    changeInputNama = (event) => {
        this.setState({ inputNama: event.target.value })
    }

    onRemoveItem = id => {
        this.setState(state => {
            const namaBuah = state.namaBuah.filter(item => item.id !== id);

            return {
                namaBuah,
            };
        });
    };

    render() {
        return (
            <>
                <div style={{ width: "70vw", margin: "0 auto" }}>
                    <h1 style={{ textAlign: "center" }}>Daftar Peserta Lomba</h1>
                    <table style={{ border: "1px solid black" }}>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Berat</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.namaBuah.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.nama}</td>
                                            <td>{item.harga}</td>
                                            <td>{item.berat / 1000} Kg</td>
                                            <td>
                                                <button value={index} style={{ marginRight: "5px" }} onClick={this.editForm}>Edit</button>
                                                <button type="button" onClick={() => this.onRemoveItem(item.id)} > Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <form style={{ textAlign: "center" }}>
                        <input type="text" value={this.state.value} onChange={this.onChangeValue} />
                        <button type="button" onClick={this.onAddItem} disabled={!this.state.value}>
                            Add</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Tugas12
