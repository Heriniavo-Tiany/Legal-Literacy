import './App.css';
import Navbar from "./components/Navbar";
import TextesJuridiques from './components/TextesJuridiques';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Thematique from "./components/Thematique";
import Favoris from "./components/Favoris";
import RechercheAvance from "./components/RechercheAvance";
import { getTextesJuridiques } from './classes/Util.js';

const textes = getTextesJuridiques();

function App() {

  console.log(textes);

  return (
    <BrowserRouter>
      <Navbar /><br /><br /><br /><br />
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='thematiques' element={<Thematique />} />
        <Route path='rechercheAvance' element={<RechercheAvance />} />
        <Route path='textesJuridiques' element={<TextesJuridiques textes={textes} />} />
        <Route path='favoris' element={<Favoris textes={textes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
