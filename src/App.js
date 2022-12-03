import './App.css';
import Navbar from "./components/Navbar";
import TextesJuridiques from './components/TextesJuridiques';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Thematique from "./components/Thematique";
import Favoris from "./components/Favoris";
import RechercheAvance from "./components/RechercheAvance";
import {getTextesJuridiques} from './classes/Util.js';
import {useTranslation} from "react-i18next";
import Madagascar from "./components/Madagascar";
import Signalement from './components/Signalement';

const textes = getTextesJuridiques();

function App() {
    const {t, i18n} = useTranslation();

    //Creating a method to change the language onChnage from select box
    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Madagascar/>}/>
                <Route path='thematiques' element={<div>

                    <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
                        <option value="fr">Français</option>
                        <option value="mg">Malagasy</option>
                    </select>


                    <Thematique/></div>}/>
                <Route path='rechercheAvance' element={<RechercheAvance/>}/>
                <Route path='textesJuridiques' element={<TextesJuridiques textes={textes}/>}/>
                <Route path='madagascar' element={<Madagascar/>}/>
                <Route path='favoris' element={<Favoris textes={textes} />} />
                <Route path='signalement' element={<Signalement />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
