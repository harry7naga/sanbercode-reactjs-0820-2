import React from 'react';

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class Tugas10 extends React.Component {
    render() {
        return (
            <div style={{ width: "50%" }}>
                <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
                <table className="tb1" style={{ width: "500px", border: "1px solid black", marginLeft: "80px" }}>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "grey" }}>Nama</th>
                            <th style={{ backgroundColor: "grey" }}>Harga</th>
                            <th style={{ backgroundColor: "grey" }}>Berat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataHargaBuah.map((item, index) => {
                                return (
                                    <tr key={index} >
                                        <td style={{ backgroundColor: "salmon" }}>{item.nama}</td>
                                        <td style={{ backgroundColor: "salmon" }}>{item.harga}</td>
                                        <td style={{ backgroundColor: "salmon" }}>{item.berat}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    };
};

export default Tugas10;