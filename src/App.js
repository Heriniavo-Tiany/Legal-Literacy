import './App.css';
import Navbar from "./components/Navbar";
import TextesJuridiques from './components/TextesJuridiques';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Thematique from "./components/Thematique";
import Favoris from "./components/Favoris";
import RechercheAvance from "./components/RechercheAvance";
import {getTextesJuridiques} from './classes/Util.js';
import {useTranslation} from "react-i18next";

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
            <Navbar/><br/><br/><br/><br/>
            <Routes>
                <Route path='/' element={<Navbar/>}/>
                <Route path='thematiques' element={<div>

                    <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
                        <option value="fr">Français</option>
                        <option value="mg">Malagasy</option>
                    </select>


                    <Thematique/></div>}/>
                <Route path='rechercheAvance' element={<RechercheAvance/>}/>
                <Route path='textesJuridiques' element={<TextesJuridiques textes={textes}/>}/>
                <Route path='favoris' element={<Favoris textes={textes} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
