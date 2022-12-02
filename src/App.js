import './App.css';
import Navbar from "./components/Navbar";
import TexteJuridique from './components/TexteJuridique';
import TextesJuridiques from './components/TextesJuridiques';

const texte = {
  "id": "1",
  "date": "2004-11-1",
  "type": {
    "id": "14",
    "name": "Convention"
  },
  "number": "C2004",
  "subject": "",
  "state": 0,
  "notes": "",
  "sources": "Nations Unis",
  "contentMG": { "raw": "htmlMG" },
  "contentFR": { "raw": "htmlFR" },
  "category": {
    "id": "1",
    "name": "Corruption et Engagement d’un représentant du gouvernement",
    "description": "",
    "icon": "",
    "common": false
  }
};

const textes = [

  {
    "id": "1",
    "date": "2004-11-1",
    "type": {
      "id": "14",
      "name": "Convention"
    },
    "number": "C2004",
    "subject": "",
    "state": 0,
    "notes": "",
    "sources": "Nations Unis",
    "contentMG": { "raw": "htmlMG" },
    "contentFR": { "raw": "htmlFR" },
    "category": {
      "id": "1",
      "name": "Corruption et Engagement d’un représentant du gouvernement",
      "description": "",
      "icon": "",
      "common": false
    }
  },
  {
    "id": "2",
    "date": "2012-09-06",
    "type": {
      "id": "14",
      "name": "Arrete"
    },
    "number": "24.480/2012",
    "subject": "portant Code de Conduite de la Police Nationale",
    "state": 0,
    "notes": "",
    "sources": "MINISTRE DE LA SECURITE INTERIEURE",
    "contentMG": { "raw": "html MG" },
    "contentFR": { "raw": "htmlFR" },
    "category": {
      "id": "2",
      "name": "Déontologie et bonne conduite des agents publics",
      "description": "",
      "icon": "",
      "common": false
    }
  }

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <TextesJuridiques textes={textes} />

      </header>
    </div>
  );
}

export default App;
