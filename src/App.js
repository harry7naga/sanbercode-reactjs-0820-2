import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Materi-14/Movie';
import Fruit from './Tugas-14/Fruit';
import Routes from './Tugas-15/Routes';
// import Tugas10 from './Tugas-10/Tugas10'
// import LifeCycle from './Tugas-11/LifeCycle';
// import Coba from './Tugas-12/coba';
// import Tugas12 from './Tugas-12/Tugas12';
// import Tugas13 from './Tugas-13/Tugas13';
// import daftarBuah from './Tugas-13/daftarBuah';
// import Example from './Tugas-13/exampleHooks';
// import DaftarPeserta from './Tugas-13/daftarPeserta';




function App() {
  return (
    <Router>
      {/* <Tugas13 /> */}
      {/* <Example /> */}
      {/* <DaftarPeserta /> */}
      <Routes />
    </Router>
  );
}

export default App;