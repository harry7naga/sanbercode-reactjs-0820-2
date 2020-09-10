import React, { useState, useEffect } from 'react';

const Example = () => {
    // Deklarasi variabel state baru yang kita sebut "count"
    const [name, setName] = useState("")
    const [count, setCount] = useState(0);

    const showName = (event) => {
        var getName = event.target.value
        setName(getName)
    }

    // Mirip dengan componentDidMount dan componentDidUpdate:
    useEffect(() => {
        if (count > 5) {
            // Memperbarui judul dokumen menggunakan API browser
            document.title = `You clicked ${count} times`;
        }
    });

    return (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
            <input onChange={showName} value={name} />
            <h2>{name}</h2>
            <br />
            <br />
            <p>Anda menekan sebanyak {count} kali</p>
            <button onClick={() => setCount(count + 1)}>
                Klik saya
                </button>
        </div>
    );
}

export default Example