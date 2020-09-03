import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div style={{ width: "40%", display: "flex", justifyContent: "center", border: "1px solid #000", borderRadius: "20px", paddingBottom: "20px" }}>
      <div style={{ width: "50%" }}>
        <h2 style={{ textAlign: "center" }}>Form Pembelian Buah</h2>
        <tabel style={{ border: "0", width: "100%", }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", }}>Nama Pelanggan</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', }}>Daftar Items</td>
              <td>
                <input type="checkbox" />
                Semangka
                <br />
                <input type="checkbox" />
                Jeruk
                <br />
                <input type="checkbox" />
                Nanas
                <br />
                <input type="checkbox" />
                Salak
                <br />
                <input type="checkbox" />
                Anggur
                <br />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button" style={{ background: "white", borderRadius: "20px" }}>Kirim</button>
              </td>
            </tr>
          </tbody>
        </tabel>
      </div>
    </div>
  );
}

export default App;